export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="w-6 h-6 bg-sky-500 rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-xs">CV</span>
        </div>
        <span className="text-slate-400 font-medium">ClearView</span>
      </div>
      <p className="text-slate-600 text-sm">
        © {new Date().getFullYear()} ClearView. All rights reserved.
      </p>
    </footer>
  )
}
