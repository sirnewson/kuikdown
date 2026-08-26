import { useState } from 'react'
import { ArrowRight, Check, Copy, Monitor, Smartphone } from 'lucide-react'
import { platforms } from '../data/downloads.js'

const icons = { smartphone: Smartphone, monitor: Monitor }

export default function DownloadCard({ item, onDownload }) {
  const [copied, setCopied] = useState(false)
  const platform = platforms[item.platform] ?? platforms.android
  const PlatformIcon = icons[platform.icon] ?? Smartphone

  async function copyChecksum(event) {
    // The checksum row lives inside the card, which is itself the download
    // trigger — don't start a download just because someone copied a hash.
    event.stopPropagation()
    try {
      await navigator.clipboard.writeText(item.sha256)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable (insecure context) — the hash is still selectable */
    }
  }

  return (
    <div className="yellow-glow group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-yellow-400">
      <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 -translate-y-6 translate-x-6 rounded-full bg-yellow-400/5 blur-2xl transition-all duration-300 group-hover:bg-yellow-400/10" />

      <button
        type="button"
        onClick={() => onDownload(item)}
        className="flex flex-1 cursor-pointer flex-col justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-inset"
      >
        <div>
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="rounded-md border border-yellow-400/20 bg-yellow-400/10 px-2.5 py-1 text-xs font-bold tracking-wide text-yellow-400 uppercase">
              {platform.label}
            </span>
            <PlatformIcon className="h-6 w-6 shrink-0 text-zinc-500 transition-colors group-hover:text-yellow-400" />
          </div>

          <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-yellow-400">
            {item.version ? `${item.name} ${item.version}` : item.name}
          </h3>
          <p className="text-sm text-zinc-400">{item.description}</p>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-zinc-800/60 pt-4">
          <span className="font-mono text-xs text-zinc-500">{item.size}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 group-hover:underline">
            Direct Download
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </button>

      {item.sha256 && (
        <div className="flex items-center gap-2 border-t border-zinc-800/60 px-6 py-3">
          <span className="shrink-0 text-[10px] font-bold tracking-wider text-zinc-600 uppercase">
            SHA-256
          </span>
          <code className="truncate font-mono text-[11px] text-zinc-500">{item.sha256}</code>
          <button
            type="button"
            onClick={copyChecksum}
            aria-label={`Copy SHA-256 checksum for ${item.name}`}
            className="ml-auto shrink-0 rounded p-1 text-zinc-600 transition-colors hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      )}
    </div>
  )
}
