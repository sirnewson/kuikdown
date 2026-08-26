import { useCallback, useEffect, useRef, useState } from 'react'
import { ShieldCheck, Zap } from 'lucide-react'
import DownloadCard from './components/DownloadCard.jsx'
import Toast from './components/Toast.jsx'
import { downloads } from './data/downloads.js'

export default function App() {
  const [toast, setToast] = useState({ message: '', visible: false })
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const notify = useCallback((message) => {
    clearTimeout(timerRef.current)
    setToast({ message, visible: true })
    timerRef.current = setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }))
    }, 3500)
  }, [])

  const handleDownload = useCallback(
    (item) => {
      notify(`Opening ${item.fileName}…`)
      window.open(item.url, '_blank', 'noopener,noreferrer')
    },
    [notify],
  )

  return (
    <div className="flex min-h-full flex-col justify-between font-sans">
      <Toast message={toast.message} visible={toast.visible} />

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-yellow-400 p-3.5 text-black shadow-lg shadow-yellow-400/20">
            <Zap className="h-8 w-8 fill-black" />
          </div>
          <h1 className="mb-2 text-5xl font-extrabold tracking-tight">
            Kuik<span className="text-yellow-400">Down</span>
          </h1>
          <p className="mx-auto max-w-md text-sm text-zinc-400 sm:text-base">
            Direct, fast installation portal. One click is all it takes.
          </p>
        </header>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {downloads.map((item) => (
            <DownloadCard key={item.id} item={item} onDownload={handleDownload} />
          ))}
        </div>
      </main>

      <footer className="w-full border-t border-zinc-900 py-6 text-xs text-zinc-600">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 px-4 text-center sm:flex-row sm:text-left">
          <span>&copy; {new Date().getFullYear()} KuikDown. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            Links point straight at the original files
          </span>
        </div>
      </footer>
    </div>
  )
}
