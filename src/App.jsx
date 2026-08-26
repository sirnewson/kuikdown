import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SearchX, ShieldCheck, Zap } from 'lucide-react'
import EntryCard from './components/EntryCard.jsx'
import FilterBar, { FILES } from './components/FilterBar.jsx'
import Toast from './components/Toast.jsx'
import { categories, entries } from './data/catalog.js'

function matches(entry, needle) {
  if (!needle) return true
  const haystack = [entry.name, entry.description, entry.category, entry.fileName, entry.url]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
  return needle
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word))
}

export default function App() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('all')
  const [toast, setToast] = useState({ message: '', visible: false })
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const handleOpen = useCallback((entry) => {
    clearTimeout(timerRef.current)
    setToast({
      message:
        entry.type === 'download' ? `Downloading ${entry.fileName}…` : `Opening ${entry.name}…`,
      visible: true,
    })
    timerRef.current = setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }))
    }, 3000)
  }, [])

  // Counts follow the search box, so a pill showing 0 means "nothing here
  // matches what you typed" rather than "this category is empty".
  const counts = useMemo(() => {
    const found = entries.filter((entry) => matches(entry, query))
    const tally = { all: found.length, [FILES]: 0 }
    for (const key of Object.keys(categories)) tally[key] = 0
    for (const entry of found) {
      tally[entry.category] = (tally[entry.category] ?? 0) + 1
      if (entry.type === 'download') tally[FILES] += 1
    }
    return tally
  }, [query])

  const visible = useMemo(
    () =>
      entries.filter((entry) => {
        if (!matches(entry, query)) return false
        if (active === 'all') return true
        if (active === FILES) return entry.type === 'download'
        return entry.category === active
      }),
    [query, active],
  )

  return (
    <div className="flex min-h-full flex-col font-sans">
      <Toast message={toast.message} visible={toast.visible} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-yellow-400 p-3.5 text-black shadow-lg shadow-yellow-400/20">
            <Zap className="h-8 w-8 fill-black" />
          </div>
          <h1 className="mb-2 text-5xl font-extrabold tracking-tight">
            Kuik<span className="text-yellow-400">Down</span>
          </h1>
          <p className="mx-auto max-w-lg text-sm text-zinc-400 sm:text-base">
            Quick links to AI tools, software, games and apps — plus direct downloads.
            One click, no detours.
          </p>
        </header>

        <FilterBar
          query={query}
          onQuery={setQuery}
          active={active}
          onActive={setActive}
          counts={counts}
        />

        {visible.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((entry) => (
              <EntryCard key={entry.id} entry={entry} onOpen={handleOpen} />
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-3 text-center">
            <SearchX className="h-10 w-10 text-zinc-700" />
            <p className="text-sm text-zinc-500">
              Nothing matches <span className="font-semibold text-zinc-300">{query}</span> here.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setActive('all')
              }}
              className="rounded-lg border border-zinc-800 px-3 py-1.5 text-xs font-semibold text-zinc-400 transition-colors hover:border-yellow-400 hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Reset filters
            </button>
          </div>
        )}
      </main>

      <footer className="w-full border-t border-zinc-900 py-6 text-xs text-zinc-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center sm:flex-row sm:text-left">
          <span>&copy; {new Date().getFullYear()} KuikDown. {entries.length} entries.</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            Every card links straight to the original source
          </span>
        </div>
      </footer>
    </div>
  )
}
