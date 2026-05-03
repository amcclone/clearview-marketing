import { WaitlistForm } from './WaitlistForm'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-600/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Wordmark */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CV</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">ClearView</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-1.5 text-sky-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
          Now accepting beta applications
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Run a Better Business.<br />
          <span className="text-sky-400">Know What It's Worth.</span><br />
          Exit on Your Terms.
        </h1>

        {/* Sub */}
        <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          ClearView is the operating platform for small business owners who want to grow smarter,
          fix what's holding them back, and be ready — whenever the right opportunity comes.
        </p>

        <div className="flex flex-col items-center gap-3">
          <WaitlistForm variant="hero" />
          <p className="text-slate-500 text-sm">Free during beta · No credit card required</p>
        </div>
      </div>
    </section>
  )
}
