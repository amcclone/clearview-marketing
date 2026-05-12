import { WaitlistForm } from './WaitlistForm'

export function WaitlistCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-br from-copper-500/10 to-copper-600/5 border border-copper-500/20 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in early. Help build it right.
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            We're opening to a small group of operators who want to run a tighter ship
            and know exactly what their business is worth. Beta members get{' '}
            <span className="text-white font-medium">free access for as long as they're active</span>,
            direct input on every feature decision, and a 1-on-1 onboarding call.
          </p>

          <div className="flex justify-center mb-4">
            <WaitlistForm variant="bottom" />
          </div>

          <p className="text-slate-500 text-sm">
            No spam. No credit card. Just early access.
          </p>
        </div>
      </div>
    </section>
  )
}
