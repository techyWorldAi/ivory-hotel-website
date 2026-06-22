import CrescentMark from './CrescentMark'

const STATS = [
  { value: 'Halal', label: 'Certified Kitchen' },
  { value: '24/7', label: 'Front Desk' },
  { value: '3', label: 'Cuisines — Chinese, Indian, Continental' },
  { value: 'Gated', label: 'Secure Parking' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-black pb-24 sm:pb-28"
    >
      <div className="relative h-[100vh] min-h-[680px] w-full overflow-hidden">
        <img
          src="/images/hero-night-sign.webp"
          alt="The Ivory Hotel illuminated sign at night, with a crescent moon mark above the name"
          className="absolute inset-0 w-full h-full object-cover object-top animate-ken-burns"
        />
        {/* Layered gradients: darker at the edges for legibility, warm glow near the sign */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/65 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-charcoal/60" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_60%_45%_at_50%_38%,rgba(182,140,78,0.18),transparent_70%)]" />

        <div className="relative z-10 h-full flex flex-col">
          {/* Trust micro-bar */}
          {/* <div className="pt-28 sm:pt-10 flex justify-center animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-ivory-100/80 font-label text-[11px] sm:text-xs uppercase tracking-widest2">
              <span className="text-brass">★★★★★</span>
              <span className="w-px h-3 bg-white/20" />
              <span>Nairobi CBD</span>
              <span className="w-px h-3 bg-white/20 hidden sm:inline" />
              <span className="hidden sm:inline">Halal Certified</span>
            </div>
          </div> */}

          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-8 h-px bg-brass/60" />
                <CrescentMark className="w-6 h-6 text-brass" />
                <span className="w-8 h-px bg-brass/60" />
              </div>
              <p className="font-label text-brass text-xs sm:text-sm uppercase tracking-widest2">
                Boutique Stays &amp; Black Pepper Restaurant
              </p>
            </div>

            <h1
              className="mt-5 font-display text-ivory-50 text-[3.2rem] leading-[0.95] sm:text-7xl lg:text-[6.5rem] text-balance animate-fade-up"
              style={{ animationDelay: '0.25s' }}
            >
              The Ivory Hotel
            </h1>

            <p
              className="mt-6 max-w-xl text-ivory-100/85 text-base sm:text-lg font-light text-balance animate-fade-up"
              style={{ animationDelay: '0.35s' }}
            >
              Quiet, considered rooms above a kitchen that does three cuisines
              properly — Chinese, Indian and Continental, fully Halal
              certified, in the heart of Nairobi.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: '0.45s' }}
            >
              <a
                href="#book"
                className="group inline-flex items-center justify-center gap-2 px-9 py-4 bg-brass text-charcoal font-label text-sm uppercase tracking-widest2 hover:bg-brass-light transition-all shadow-lg shadow-brass/20 hover:shadow-brass/30 hover:-translate-y-0.5"
              >
                Reserve a Room
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#restaurant"
                className="inline-flex items-center justify-center px-9 py-4 border border-ivory-100/30 text-ivory-50 font-label text-sm uppercase tracking-widest2 hover:border-brass hover:text-brass hover:bg-white/5 transition-all"
              >
                View the Menu
              </a>
            </div>

            <a
              href="tel:0704202222"
              className="mt-6 font-label text-ivory-100/55 text-xs uppercase tracking-widest2 hover:text-brass transition-colors animate-fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              Or call 0704&nbsp;202&nbsp;222
            </a>
          </div>

          {/* Scroll cue */}
          <div className="hidden sm:flex justify-center pb-10">
            <div className="flex flex-col items-center gap-2 text-ivory-100/40 animate-scroll-cue">
              <span className="font-label text-[10px] uppercase tracking-widest2">Scroll</span>
              <span className="w-px h-8 bg-current" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating stats bar bridging into the next section */}
      <div className="relative z-20 px-6 lg:px-10 -mt-12 sm:-mt-14">
        <div className="max-w-5xl mx-auto bg-ivory-50 rounded-2xl shadow-2xl shadow-black/40 grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-charcoal/10">
          {STATS.map((s) => (
            <div key={s.label} className="px-5 py-6 text-center">
              <p className="font-display text-2xl sm:text-3xl text-charcoal">{s.value}</p>
              <p className="font-label text-[10px] sm:text-[11px] uppercase tracking-wide text-charcoal/50 mt-1.5 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
