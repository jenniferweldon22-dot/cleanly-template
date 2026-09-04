import Hero from '../components/Hero'
import ServiceAreaSection from '../components/ServiceAreaSection'
import ServicesOverview from '../components/ServicesOverview'
import WhyChooseUs from '../components/WhyChooseUs'
import BeforeAfterGallery from '../components/BeforeAfterGallery'
import ReviewsSection from '../components/ReviewsSection'
import HowItWorks from '../components/HowItWorks'
import PricingSection from '../components/PricingSection'
import FAQSection from '../components/FAQSection'
import FinalCTA from '../components/FinalCTA'

function Home() {
  return (
    <>
      <Hero />
      <ServiceAreaSection />
      <ServicesOverview />
      <WhyChooseUs />
      <BeforeAfterGallery />
      <ReviewsSection />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </>
  )
}

export default Home
