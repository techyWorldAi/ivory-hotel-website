const IMAGES: { src: string; alt: string; span?: string }[] = [
  {
    src: 'images/exterior-day.webp',
    alt: 'The Ivory Hotel building exterior by day, black and ivory facade with the Black Pepper Restaurant sign',
    span: 'sm:row-span-2',
  },
  {
    src: 'images/walkway.webp',
    alt: 'Covered side walkway leading to the hotel entrance, lined with potted snake plants',
  },
  {
    src: 'images/lobby-glass.webp',
    alt: 'Lobby seating area seen through the glass entrance doors',
  },
  {
    src: 'images/lobby-wide.webp',
    alt: 'Wide view of the lounge with armchairs, a monstera plant and a curved charcoal feature wall',
    span: 'sm:row-span-2',
  },
  {
    src: 'images/exterior-angle.webp',
    alt: 'Angled street view of The Ivory Hotel facade and gated entrance',
  },
  {
    src: 'images/restaurant-menu.webp',
    alt: 'Black Pepper Restaurant menu board listing mains and specials',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ivory-50 py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <p className="font-label text-brass text-xs uppercase tracking-widest2 mb-4">
            A Closer Look
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal leading-tight text-balance">
            Around the property
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 sm:[grid-template-rows:repeat(2,minmax(220px,1fr))]">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className={`overflow-hidden rounded-2xl ${img.span ?? ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[220px] hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
