type Room = {
  name: string
  blurb: string
  amenities: string[]
  image: string
  alt: string
}

const ROOMS: Room[] = [
  {
    name: 'Deluxe King',
    blurb:
      'A leather-panelled headboard, full air conditioning and a marble-tiled bathroom — built for a still night after a long day in the city.',
    amenities: ['King bed', 'Air conditioning', 'Wardrobe', 'En-suite bathroom'],
    image: '/images/room-king.webp',
    alt: 'Deluxe King room with leather headboard, walnut wardrobe and grey marble flooring',
  },
  {
    name: 'Twin Comfort',
    blurb:
      'Two full beds beneath soft reading lights, finished in the same warm palette as the rest of the house. Suited to colleagues or family travelling together.',
    amenities: ['Two full beds', 'Air conditioning', 'Reading lights', 'En-suite bathroom'],
    image: '/images/room-twin.webp',
    alt: 'Twin Comfort room with two beds, white linens and wall-mounted air conditioning',
  },
  {
    name: 'Executive Suite',
    blurb:
      'A wider footprint with a private desk and television corner, opening onto a hallway finished in dark slate and warm timber.',
    amenities: ['Work desk', 'Television', 'Air conditioning', 'Slate flooring'],
    image: '/images/room-hallway.webp',
    alt: 'Executive Suite entrance hallway in dark slate tile, leading to a desk and television',
  },
]

export default function Rooms() {
  return (
    <section id="stay" className="bg-ivory-100 py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <p className="font-label text-brass text-xs uppercase tracking-widest2 mb-4">
            Rooms &amp; Suites
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal leading-tight text-balance">
            Three ways to stay
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {ROOMS.map((room) => (
            <article key={room.name} className="group">
              <div className="overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                <img
                  src={room.image}
                  alt={room.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-2xl text-charcoal mb-2">{room.name}</h3>
              <p className="text-charcoal/65 text-sm leading-relaxed mb-4">{room.blurb}</p>
              <ul className="flex flex-wrap gap-2">
                {room.amenities.map((a) => (
                  <li
                    key={a}
                    className="font-label text-[11px] uppercase tracking-wide text-charcoal/55 border border-charcoal/15 rounded-full px-3 py-1"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6 items-center bg-charcoal rounded-3xl overflow-hidden">
          <div className="aspect-[5/4] sm:aspect-auto sm:h-full">
            <img
              src="/images/bathroom.webp"
              alt="En-suite bathroom finished in cream tile with black flooring, a pedestal sink and rainfall shower"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 sm:p-10">
            <p className="font-label text-brass text-xs uppercase tracking-widest2 mb-3">
              In every room
            </p>
            <p className="font-display text-2xl sm:text-3xl text-ivory-50 leading-snug text-balance">
              Cream tile, black slate, hot water on demand — the small things,
              done properly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
