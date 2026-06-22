# The Ivory Hotel — Website

A React + TypeScript + Tailwind CSS site for The Ivory Hotel, Nairobi, built
from your own property photos and the Black Pepper Restaurant menu.

## Design

- **Palette** — ivory background, charcoal black, walnut brown, and a brass
  gold accent, drawn from the lobby's curved feature wall, woven basketry,
  and the crescent moon in your logo.
- **Type** — Cormorant Garamond for display headings (echoing the hotel's
  serif wordmark), Inter for body and labels.
- **Signature motif** — the crescent from your sign is reused throughout as
  a small icon and as a thin arc divider.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # to check the production build locally
```

The built site lands in `dist/` — upload that folder's contents to any
static host (Netlify, Vercel, your own server, etc).

## Project structure

```
src/
  components/
    Navbar.tsx          sticky nav, solid on scroll
    Hero.tsx            full-bleed night shot of your sign
    Welcome.tsx         lobby intro section
    Rooms.tsx           three room types + bathroom strip
    Restaurant.tsx       Black Pepper menu (mains + specials)
    Gallery.tsx         property photo grid
    LocationBooking.tsx contact details + reservation form
    Footer.tsx
    CrescentMark.tsx    the reusable moon icon
  App.tsx
  index.css
public/
  images/               your photos, renamed for clarity
```

## Next steps to make it live

- Wire the reservation form in `LocationBooking.tsx` to a real backend or
  email service (it currently just shows a confirmation message).
- Swap the placeholder room names/prices and menu prices for anything that's
  changed since the photos were taken.
- Add a real map embed in the Location section if you'd like one.
# ivory-hotel-website
