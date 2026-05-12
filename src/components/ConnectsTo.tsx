const integrations = [
  { name: 'QuickBooks', icon: '📒', color: 'text-green-400' },
  { name: 'ServiceTitan', icon: '🔧', color: 'text-blue-400' },
  { name: 'HubSpot', icon: '🟠', color: 'text-orange-400' },
  { name: 'Jobber', icon: '📋', color: 'text-slate-300' },
  { name: 'Housecall Pro', icon: '🏠', color: 'text-slate-300' },
  { name: 'CSV / Excel', icon: '📊', color: 'text-slate-300' },
]

export function ConnectsTo() {
  return (
    <section className="py-12 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-500 text-sm uppercase tracking-widest font-medium mb-6">
          Works with what you already use — no rip-and-replace
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center gap-2 bg-white/[0.04] border border-white/10
                         rounded-full px-4 py-2 text-sm font-medium text-slate-300
                         hover:border-copper-500/40 hover:text-white transition"
            >
              <span className={integration.color}>{integration.icon}</span>
              {integration.name}
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-sm mt-6">
          Connect in minutes. Your team keeps working the same way.
        </p>
      </div>
    </section>
  )
}
