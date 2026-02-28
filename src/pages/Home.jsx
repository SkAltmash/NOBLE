import React from 'react'
import Hero from '../components/Hero'
import ServicesHighlight from '../components/ServicesHighlight'
import WhyChooseUs from '../components/WhyChooseUs'
import ProcessSection from '../components/ProcessSection'
import CTASection from '../components/CTASection'
function Home() {
  return (
    <div>
      <Hero />
      <ServicesHighlight />
      <WhyChooseUs />
      <ProcessSection />
      <CTASection />
    </div>
  )
}

export default Home
