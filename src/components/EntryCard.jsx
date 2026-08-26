import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Download, Monitor, Smartphone } from 'lucide-react'
import { categories, platforms } from '../data/catalog.js'

const platformIcons = { smartphone: Smartphone, monitor: Monitor }

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

/** Small square at the top-left of a card: a site favicon, or a letter tile. */
function Mark({ entry }) {
  const [failed, setFailed] = useState(false)
  const host = hostOf(entry.url)

  if (entry.type === 'download') {
    const Icon = platformIcons[platforms[entry.platform]?.icon] ?? Download
    return (
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400">
        <Icon className="h-4.5 w-4.5" />
      </span>
    )
  }

  if (host && !failed) {
    return (
      <img
        src={`https://icons.duckduckgo.com/ip3/${host}.ico`}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-9 w-9 shrink-0 rounded-lg bg-zinc-800 object-contain p-1.5"
      />
    )
  }

  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-sm font-bold text-zinc-400">
      {entry.name.charAt(0)}
    </span>
  )
}

export default function EntryCard({ entry, onOpen }) {
  const [copied, setCopied] = useState(false)
  const isDownload = entry.type === 'download'
  const category = categories[entry.category]

  async function copyChecksum(event) {
    // The checksum row sits inside the card, which is itself the trigger --
    // don't start a download just because someone copied a hash.
    event.preventDefault()
    event.stopPropagation()
    try {
      await navigator.clipboard.writeText(entry.sha256)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable (insecure context) -- the hash is still selectable */
    }
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 transition-colors duration-200 hover:border-yellow-400/60 hover:bg-zinc-900">
      <a
        href={entry.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onOpen(entry)}
        className="flex flex-1 flex-col gap-3 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-inset"
      >
        <div className="flex items-start gap-3">
          <Mark entry={entry} />

          <div className="min-w-0 flex-1">
            <h3 className="truncate font-bold text-white transition-colors group-hover:text-yellow-400">
              {entry.name}
              {entry.version && (
                <span className="ml-1.5 text-xs font-semibold text-zinc-500">{entry.version}</span>
              )}
            </h3>
            <p className="truncate text-xs text-zinc-500">
              {isDownload ? entry.fileName : hostOf(entry.url)}
            </p>
          </div>

          {isDownload ? (
            <Download className="h-4 w-4 shrink-0 text-zinc-600 transition-colors group-hover:text-yellow-400" />
          ) : (
            <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-yellow-400" />
          )}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-zinc-400">{entry.description}</p>

        <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase">
          <span className="rounded border border-zinc-700/70 px-1.5 py-0.5 text-zinc-500">
            {category?.label ?? entry.category}
          </span>
          {isDownload && (
            <span className="rounded border border-yellow-400/25 bg-yellow-400/10 px-1.5 py-0.5 text-yellow-400">
              {platforms[entry.platform]?.label ?? 'File'} &middot; {entry.size}
            </span>
          )}
        </div>
      </a>

      {entry.sha256 && (
        <div className="flex items-center gap-2 border-t border-zinc-800/70 px-4 py-2">
          <span className="shrink-0 text-[10px] font-bold tracking-wider text-zinc-600 uppercase">
            SHA-256
          </span>
          <code className="truncate font-mono text-[10px] text-zinc-600">{entry.sha256}</code>
          <button
            type="button"
            onClick={copyChecksum}
            aria-label={`Copy SHA-256 checksum for ${entry.name}`}
            className="ml-auto shrink-0 rounded p-1 text-zinc-600 transition-colors hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      )}
    </div>
  )
}
