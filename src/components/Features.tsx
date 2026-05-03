const features = [
  {
    icon: '⚙️',
    title: 'Operations Center',
    desc: 'Manage and monitor the health of your business in one place — SOPs, checklists, training, and team accountability.',
  },
  {
    icon: '📊',
    title: 'M&A Readiness Score',
    desc: 'Always know where you stand across financials, operations, and growth metrics — and exactly what to improve.',
  },
  {
    icon: '📈',
    title: 'Value Tracker',
    desc: 'Watch your enterprise value grow in real time as you execute on the right priorities.',
  },
  {
    icon: '🔧',
    title: 'Gap Analysis',
    desc: 'Prioritize the fixes that move the needle most — not just what feels urgent today.',
  },
]

export function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          One platform. Every angle covered.
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16 text-lg">
          ClearView connects your operations, financials, and strategic position into a single clear picture.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-sky-500/30 transition group"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-sky-400 transition">
                {f.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
