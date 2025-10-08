
import BentoExperience from './components/BentoGrid'
import BlogSection from './components/BlogsSection'
import CTASection from './components/CTASection'
import FAQSection from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Herosection'
import CreativeShowcase from './components/Introsection'
import LuxuryNavbar from './components/Navbar'
import RoomShowcase from './components/RoomSlider'
import TestimonialSection from './components/Testimonial'

function App() {
  return (
    <div>
      <LuxuryNavbar/>
      <Hero/>
      <CreativeShowcase/>
      <BentoExperience/>
      <RoomShowcase/>
      <TestimonialSection/>
      <BlogSection/>
      <FAQSection/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default App