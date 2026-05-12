const steps = [
  {
    number: '01',
    title: 'Connect your tools.',
    body: "QuickBooks, ServiceTitan, HubSpot — point Galvern at what you already use. Takes about 10 minutes. No data entry, no migration.",
    icon: '🔌',
  },
  {
    number: '02',
    title: 'Get one clear picture.',
    body: "Revenue by job type. Margin by tech. Cash by week. Business health score. Everything you've never been able to see in one place because it lived in five different tools.",
    icon: '🔭',
  },
  {
    number: '03',
    title: 'Work on the right things.',
    body: "Galvern shows you the three moves that would grow your business value the most. Not what looks worst on a dashboard — what actually moves the needle.",
    icon: '🎯',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Up and running in a morning.
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16 text-lg">
          No IT department. No consultant. Just connect, look, and go.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Connector line between steps (hidden on mobile) */}
              <div className="hidden sm:block absolute top-8 left-full w-full h-px
                              bg-gradient-to-r from-copper-500/30 to-transparent
                              -translate-x-4 last:hidden" />

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8
                              hover:border-copper-500/30 transition">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-copper-500 font-bold text-sm font-mono
                                   bg-copper-500/10 border border-copper-500/20
                                   rounded-lg px-2 py-1">
                    {step.number}
                  </span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
