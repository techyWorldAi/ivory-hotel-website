import CrescentMark from './CrescentMark'

export default function Welcome() {
  return (
    <section className="relative bg-ivory-50 py-24 lg:py-32 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p className="font-label text-brass text-xs uppercase tracking-widest2 mb-4">
            Welcome
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-charcoal mb-6 text-balance">
            A quiet corner of the city,
            <br />
            dressed in ivory and walnut.
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-5 max-w-md">
            Step through the gate and the city noise drops away. Our lounge sits
            beneath a single curved wall, hand-finished in charcoal plaster and
            hung with woven African basketry — a quiet welcome before you ever
            reach a room.
          </p>
          <p className="text-charcoal/70 leading-relaxed max-w-md">
            Every detail, from the brass-framed mirrors to the monstera in the
            corner, was chosen the same way a good host sets a table: for the
            people who'll actually sit there.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md border-t border-charcoal/10 pt-8">
            <div>
              <p className="font-display text-3xl text-charcoal">24</p>
              <p className="font-label text-[11px] uppercase tracking-widest2 text-charcoal/50 mt-1">
                Hour Front Desk
              </p>
            </div>
            <div>
              <CrescentMark className="w-6 h-6 text-brass mb-1" />
              <p className="font-label text-[11px] uppercase tracking-widest2 text-charcoal/50">
                Halal Kitchen
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-charcoal">3</p>
              <p className="font-label text-[11px] uppercase tracking-widest2 text-charcoal/50 mt-1">
                Cuisines, One Table
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
            <img
              src="/images/lobby-close.webp"
              alt="The Ivory Hotel lounge: cream armchairs with walnut frames around a low table, beneath a curved charcoal wall hung with woven baskets"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-brass/10 -z-10" />
        </div>
      </div>
    </section>
  )
}
