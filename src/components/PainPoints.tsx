const pains = [
  {
    icon: '🧠',
    text: "You're too busy running the business to see what's actually broken inside it.",
  },
  {
    icon: '📊',
    text: "You don't have a clear picture of your numbers, operations, or value at any given moment.",
  },
  {
    icon: '⚡',
    text: "When growth stalls — or a buyer calls — you're not ready.",
  },
]

export function PainPoints() {
  return (
    <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-slate-400 text-sm uppercase tracking-widest font-medium mb-12">
          Sound familiar?
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center hover:border-sky-500/30 transition"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <p className="text-slate-300 text-base leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
