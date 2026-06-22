import CrescentMark from './CrescentMark'

const MAINS: { name: string; price: string }[] = [
  { name: 'Lemon Shrimp', price: '1,000' },
  { name: 'Mari Methi Chicken', price: '1,000' },
  { name: 'Prawns Fried Rice', price: '1,000' },
  { name: 'Char Chay Chilli Chicken', price: '1,000' },
  { name: 'Sizzling Beef', price: '1,200' },
  { name: 'Pepper Steak / T-Bone / Lamb Chops', price: '1,200' },
  { name: 'Bengali Fried Fish with Ugali', price: '1,200' },
]

const SPECIALS: { name: string; price: string }[] = [
  { name: 'Lemon Chicken', price: '800' },
  { name: 'Butter Chicken', price: '1,000' },
  { name: 'Hot & Sour Whole Fish with Rice', price: '1,400' },
]

export default function Restaurant() {
  return (
    <section id="restaurant" className="bg-charcoal py-24 lg:py-32 px-6 lg:px-10 text-ivory-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="overflow-hidden rounded-2xl aspect-[4/3] mb-10">
              <img
                src="images/restaurant-dining.webp"
                alt="Black Pepper Restaurant dining room with cane-back chairs, light timber flooring and tall street-facing windows"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-label text-brass text-xs uppercase tracking-widest2 mb-4">
              Ground Floor
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-6 text-balance">
              Black Pepper Restaurant
            </h2>
            <p className="text-ivory-100/70 leading-relaxed max-w-md mb-6">
              Chinese, Indian and Continental cooking under one roof, fully
              Halal certified. Open for breakfast, lunch and dinner, with a
              banqueting hall for private gatherings.
            </p>
            <div className="flex items-center gap-3 text-brass">
              <CrescentMark className="w-5 h-5" />
              <span className="font-label text-xs uppercase tracking-widest2">
                Halal Certified Kitchen
              </span>
            </div>
            <p className="mt-8 font-label text-ivory-100/60 text-sm">
              Orders &amp; reservations — <span className="text-ivory-50">0704 202 222</span>
            </p>
          </div>

          <div className="bg-ivory-50 text-charcoal rounded-3xl p-8 sm:p-10">
            <h3 className="font-display text-2xl mb-1">Mains</h3>
            <div className="w-10 h-px bg-brass mb-6" />
            <ul className="divide-y divide-charcoal/10">
              {MAINS.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-sm sm:text-base">{item.name}</span>
                  <span className="font-label text-sm text-charcoal/60 whitespace-nowrap">
                    KSh {item.price}/-
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="font-display text-2xl mb-1 mt-8">Specials</h3>
            <div className="w-10 h-px bg-brass mb-6" />
            <ul className="divide-y divide-charcoal/10">
              {SPECIALS.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-sm sm:text-base">{item.name}</span>
                  <span className="font-label text-sm text-charcoal/60 whitespace-nowrap">
                    KSh {item.price}/-
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
