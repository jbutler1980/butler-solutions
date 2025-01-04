import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}