import { AppWindow, Download, Gamepad2, Search, Smartphone, Sparkles, Wrench, X } from 'lucide-react'
import { categories } from '../data/catalog.js'

const icons = {
  sparkles: Sparkles,
  appWindow: AppWindow,
  wrench: Wrench,
  gamepad: Gamepad2,
  smartphone: Smartphone,
}

const FILES = 'files'

/** The pill row: All, one per category, then a cross-cutting "Files" filter. */
export default function FilterBar({ query, onQuery, active, onActive, counts }) {
  const pills = [
    { key: 'all', label: 'All', Icon: null },
    ...Object.entries(categories).map(([key, { label, icon }]) => ({
      key,
      label,
      Icon: icons[icon],
    })),
    { key: FILES, label: 'Files', Icon: Download },
  ]

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <input
          type="search"
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Search tools, software, games, files…"
          aria-label="Search the catalogue"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900/70 py-3 pr-10 pl-11 text-sm text-white placeholder:text-zinc-600 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => onQuery('')}
            aria-label="Clear search"
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded p-1 text-zinc-500 transition-colors hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {pills.map(({ key, label, Icon }) => {
          const selected = active === key
          return (
            <button
              key={key}
              type="button"
              onClick={() => onActive(key)}
              aria-pressed={selected}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                selected
                  ? 'border-yellow-400 bg-yellow-400 text-black'
                  : 'border-zinc-800 bg-zinc-900/70 text-zinc-400 hover:border-zinc-700 hover:text-white'
              }`}
            >
              {Icon && <Icon className="h-3.5 w-3.5" />}
              {label}
              <span className={selected ? 'text-black/60' : 'text-zinc-600'}>{counts[key] ?? 0}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { FILES }
