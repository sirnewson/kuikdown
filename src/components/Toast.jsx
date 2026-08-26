import { CheckCircle2 } from 'lucide-react'

export default function Toast({ message, visible }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed top-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 font-semibold text-black shadow-xl transition-all duration-300 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-5 opacity-0'
      }`}
    >
      <CheckCircle2 className="h-5 w-5 shrink-0" />
      <span className="text-sm">{message}</span>
    </div>
  )
}
