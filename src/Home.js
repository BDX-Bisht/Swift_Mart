import React from 'react'
import HeroSection from './Components/HeroSection'
import Services from './Components/Services'
import Trusted from './Components/Trusted'
import FeatureProducts from './Components/FeatureProducts'

const Home = () => {

    document.title = "Ecommerce-Store";

    const data = {
        name: "swift-mart store"
    }

    return (
        <>
            <HeroSection myData={data} />
            <FeatureProducts />
            <Services />
            <Trusted />
        </>
    )
}

export default Home