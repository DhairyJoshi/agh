import React from 'react'
import TopHeader from './TopHeader'
import AdvertiseBanner from './AdvertiseBanner'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import ProductBanner from './ProductBanner'
import Crops from './Crops'
import About from './About'
import Seeds from './Seeds'
import Preloader from '../common/Preloader'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.compat.css"

export default function Home() {
  return (
    <>
      <Preloader />

      <TopHeader />

      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
        <AdvertiseBanner />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={true}>
        <About />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={true}>
        <ProductBanner />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={true}>
        <Crops />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={true}>
        <Seeds />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={true}>
        <NewsLetter />
      </ScrollAnimation>

      <Footer />
    </>
  )
}
