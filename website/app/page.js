import HeroSection from './components/HeroSection'
import InnovationMarquee from './components/InnovationMarquee'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import AIStackSection from './components/AIStackSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InnovationMarquee />
      <AboutSection />
      <ServicesSection />
      <AIStackSection />
      <CaseStudiesSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
