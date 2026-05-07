import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export const config = { runtime: 'edge' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const CONFIRMATION_TEXT = `Thanks for reserving your spot.

Galvern is being built for owner-operators of service businesses doing $1M-$20M who want to run the daily work AND build the company's value at the same time. We'll be in touch when the beta opens.

No action needed from you right now.

— The Galvern team
`

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405)
  }

  let body: { email?: unknown; source?: unknown }
  try {
    body = (await request.json()) as { email?: unknown; source?: unknown }
  } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400)
  }

  const email = typeof body.email === 'string' ? body.email.toLowerCase().trim() : ''
  const source = typeof body.source === 'string' && body.source ? body.source : 'hero'

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return json({ ok: false, error: 'Invalid email' }, 400)
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const resendKey = process.env.RESEND_API_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
    return json({ ok: false, error: 'Server not configured' }, 500)
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  })

  const { error } = await supabase
    .from('beta_waitlist')
    .insert([{ email, source }])

  let alreadyOnList = false
  if (error) {
    console.error(error)
    if (error.code === '23505') {
      alreadyOnList = true
    } else {
      console.error('Supabase insert failed:', error)
      return json({ ok: false, error: 'Could not save email' }, 500)
    }
  }

  if (resendKey) {
    try {
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'Galvern <onboarding@resend.dev>',
        to: email,
        subject: "You're on the Galvern beta list",
        text: CONFIRMATION_TEXT,
      })
    } catch (e) {
      console.error('Resend send failed:', e)
    }
  } else {
    console.warn('RESEND_API_KEY not set; skipping confirmation email')
  }

  return json({ ok: true, alreadyOnList })
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}
