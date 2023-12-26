import React from 'react'
import HeroSection from './Components/HeroSection'

const About = () => {

  document.title = "About Us | Ecommerce-Store"

  const data = {
    name: "swift-mart ecommerce"
  }

  return (
    <>
      <HeroSection myData={data} />
    </>
  )
}

export default About