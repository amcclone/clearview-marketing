const profiles = [
  {
    emoji: '💪',
    label: 'The Grinder',
    tagline: '"I\'m too busy running it to zoom out and see it."',
    desc: "Galvern gives you the visibility you've never had time to build — so you can finally work on the business, not just in it.",
  },
  {
    emoji: '🚀',
    label: 'The Grower',
    tagline: '"I\'m ready to scale — I just don\'t know where to push."',
    desc: 'Galvern shows you exactly where the real leverage is so every dollar and hour goes toward actual growth.',
  },
  {
    emoji: '🎯',
    label: 'The Planner',
    tagline: '"I want to know what this business is actually worth."',
    desc: 'Galvern tracks your enterprise value every day from real data — so you\'re always ready, whether you sell or not.',
  },
]

export function OwnerProfiles() {
  return (
    <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Which one sounds like you?
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16 text-lg">
          Service businesses doing $1M–$20M. Wherever you are in the journey.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-copper-500/30 transition"
            >
              <div className="text-5xl mb-4">{p.emoji}</div>
              <h3 className="text-white font-bold text-xl mb-1">{p.label}</h3>
              <p className="text-copper-500 text-sm font-medium mb-3">{p.tagline}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          Works across trades, environmental services, logistics, landscaping, specialty contractors, and beyond.
        </p>
      </div>
    </section>
  )
}
