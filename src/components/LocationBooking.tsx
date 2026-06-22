import { useState, FormEvent } from 'react'
import CrescentMark from './CrescentMark'

export default function LocationBooking() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Wire this up to your booking/email provider of choice.
    setSubmitted(true)
  }

  return (
    <section id="location" className="bg-ivory-100 py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <p className="font-label text-brass text-xs uppercase tracking-widest2 mb-4">
            Find Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal leading-tight mb-8 text-balance">
            Nairobi, Kenya
          </h2>

          <dl className="space-y-6 text-charcoal/75">
            <div>
              <dt className="font-label text-[11px] uppercase tracking-widest2 text-charcoal/45 mb-1">
                Reservations
              </dt>
              <dd>0704 202 222</dd>
            </div>
            <div>
              <dt className="font-label text-[11px] uppercase tracking-widest2 text-charcoal/45 mb-1">
                Front Desk
              </dt>
              <dd>Open 24 hours</dd>
            </div>
            <div>
              <dt className="font-label text-[11px] uppercase tracking-widest2 text-charcoal/45 mb-1">
                Black Pepper Restaurant
              </dt>
              <dd>Breakfast · Lunch · Dinner — Halal certified</dd>
            </div>
          </dl>

          <div className="mt-10 flex items-center gap-3 text-brass">
            <CrescentMark className="w-5 h-5" />
            <span className="font-label text-xs uppercase tracking-widest2">
              Secure, gated parking on site
            </span>
          </div>
        </div>

        <div id="book" className="bg-charcoal rounded-3xl p-8 sm:p-10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CrescentMark className="w-8 h-8 text-brass mb-4" />
              <p className="font-display text-2xl text-ivory-50 mb-2">
                Request received
              </p>
              <p className="text-ivory-100/65 text-sm max-w-xs">
                We'll confirm your stay by phone or email shortly. Thank you for
                choosing The Ivory Hotel.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="font-label text-brass text-xs uppercase tracking-widest2 mb-1">
                Reserve a Room
              </p>
              <h3 className="font-display text-2xl text-ivory-50 mb-6">
                Tell us your dates
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Check in" type="date" required />
                <Field label="Check out" type="date" required />
              </div>
              <Field label="Full name" type="text" required />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Phone" type="tel" required />
                <Field label="Guests" type="number" min={1} defaultValue={1} />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-brass text-charcoal font-label text-sm uppercase tracking-widest2 hover:bg-brass-light transition-colors"
              >
                Send Reservation Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  type,
  required,
  min,
  defaultValue,
}: {
  label: string
  type: string
  required?: boolean
  min?: number
  defaultValue?: number
}) {
  const id = label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-label text-[11px] uppercase tracking-widest2 text-ivory-100/50 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        min={min}
        defaultValue={defaultValue}
        className="w-full bg-charcoal-700 border border-white/10 rounded-lg px-3.5 py-2.5 text-ivory-50 text-sm focus:border-brass outline-none transition-colors"
      />
    </div>
  )
}
