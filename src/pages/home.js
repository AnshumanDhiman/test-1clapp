import React from 'react'
import CarouselImage from '../component/carousel/Carousel'
import HeroSection from '../component/heroSection/HeroSection'
import Slogan from '../component/slogan/Slogan'
import Serviceworks from '../component/service-cards/Service-cards'
import Howitworks from '../component/howitworks/Howitworks'
import Download from '../component/download/Download'


function Home() {
    return (
        <>
      
      <HeroSection />
      <Slogan/>
            <Serviceworks/>
            <Howitworks />
            <div className="carousel-parent">
            <CarouselImage />
            </div>
            <Download />     
        </>
        
    )
}

export default Home
