import { useState } from 'react'
import { supabase } from '../lib/supabase'

export function WaitlistForm({ variant = 'hero' }: { variant?: 'hero' | 'bottom' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    setErrorMsg('')

    const { error } = await supabase
      .from('beta_waitlist')
      .insert([{ email: email.toLowerCase().trim(), source: variant }])

    if (error) {
      if (error.code === '23505') {
        setErrorMsg("You're already on the list! We'll be in touch.")
        setStatus('error')
      } else {
        setErrorMsg('Something went wrong. Please try again.')
        setStatus('error')
      }
    } else {
      setStatus('success')
      setEmail('')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-6 py-4 text-green-400 font-medium">
        <span className="text-2xl">🎉</span>
        <span>You're in! We'll reach out when beta opens.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-xl transition whitespace-nowrap"
        >
          {status === 'loading' ? 'Joining...' : 'Reserve My Spot'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-sm text-amber-400">{errorMsg}</p>
      )}
    </form>
  )
}
