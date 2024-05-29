import React from 'react'

import HeroSection from "../HeroSection.jsx";
import MyPortfolio from "../Portifolio.jsx";
import AboutMe from "../AboutMe.jsx";
import ContactMe from "../ContactMe.jsx"

export default function Home() {
  return (
    <>
        <HeroSection/>
        <MyPortfolio/>
        <AboutMe/>
        <ContactMe/>
    </>
  )
}
