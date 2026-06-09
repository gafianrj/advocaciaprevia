import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PracticeAreas from './components/PracticeAreas';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-gray-300 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PracticeAreas />
        <About />
        <Testimonials />
        <Contact />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
