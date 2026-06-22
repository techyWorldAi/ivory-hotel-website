import CrescentMark from './CrescentMark'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory-100/60 px-6 lg:px-10 py-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5 text-ivory-50">
          <CrescentMark className="w-4 h-4 text-brass" />
          <span className="font-display text-lg">The Ivory Hotel</span>
        </div>

        <p className="font-label text-xs tracking-wide text-center">
          Black Pepper Restaurant — Chinese · Indian · Continental · Halal
        </p>

        <p className="font-label text-xs tracking-wide">
          &copy; {new Date().getFullYear()} The Ivory Hotel, Nairobi
        </p>
      </div>
    </footer>
  )
}
