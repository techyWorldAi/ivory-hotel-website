import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Rooms from './components/Rooms'
import Restaurant from './components/Restaurant'
import Gallery from './components/Gallery'
import LocationBooking from './components/LocationBooking'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Rooms />
        <Restaurant />
        <Gallery />
        <LocationBooking />
      </main>
      <Footer />
    </div>
  )
}
