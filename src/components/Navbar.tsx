import { useEffect, useState } from 'react'
import CrescentMark from './CrescentMark'

const LINKS = [
  { href: '#stay', label: 'Stay' },
  { href: '#restaurant', label: 'Black Pepper' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#location', label: 'Location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2.5 text-ivory-50">
          <CrescentMark className="w-5 h-5 text-brass" />
          <span className="font-display text-xl tracking-wide leading-none">
            The Ivory Hotel
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-ivory-100/90 font-label text-[13px] uppercase tracking-widest2">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brass transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#book"
          className="hidden md:inline-flex items-center border border-brass/70 text-brass px-5 py-2 text-[13px] uppercase tracking-widest2 hover:bg-brass hover:text-charcoal transition-colors"
        >
          Reserve
        </a>

        <button
          className="md:hidden text-ivory-50 p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-4 h-px bg-current" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-charcoal/98 border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-5 text-ivory-100 font-label text-sm uppercase tracking-widest2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#book" onClick={() => setOpen(false)} className="text-brass">
                Reserve
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
