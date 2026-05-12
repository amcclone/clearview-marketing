export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <div className="flex items-center justify-center mb-3">
        <img src="/galvern-logo.png" alt="Galvern" className="h-6 md:h-7 w-auto opacity-80" />
      </div>
      <nav className="flex items-center justify-center gap-4 mb-3 text-sm">
        <a href="/privacy.html" className="text-slate-500 hover:text-copper-500 transition">Privacy</a>
        <span className="text-slate-700">·</span>
        <a href="/terms.html" className="text-slate-500 hover:text-copper-500 transition">Terms</a>
      </nav>
      <p className="text-slate-600 text-sm">
        © {new Date().getFullYear()} Galvern. All rights reserved.
      </p>
    </footer>
  )
}
