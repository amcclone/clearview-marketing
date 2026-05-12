const stats = [
  { value: '$1M–$20M', label: 'Revenue range we\'re built for' },
  { value: '60s', label: 'To generate an SOP with AI Wizard' },
  { value: '3x–5x', label: 'Industry EBITDA multiple — what trades businesses sell for' },
]

export function SocialProof() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Trust statement */}
        <div className="text-center mb-16">
          <p className="text-copper-500 text-sm font-medium uppercase tracking-widest mb-4">
            Built with operators in the room
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Designed for the owner who runs the show.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            HVAC. Electrical. Landscaping. Environmental services. Specialty
            contracting. If you own it, operate it, and want to know what it's
            worth — this is for you.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-[#0a0f1e] px-8 py-8 text-center
                         hover:bg-white/[0.02] transition"
            >
              <div className="text-3xl font-bold text-copper-500 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
