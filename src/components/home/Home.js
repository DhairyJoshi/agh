import React from 'react'
import TopHeader from './TopHeader'
import AdvertiseBanner from './AdvertiseBanner'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import ProductBanner from './ProductBanner'
import Crops from './Crops'
import About from './About'
import CropsTwo from './CropsTwo'

export default function Home() {
  return (
    <div>
      <TopHeader />

      <AdvertiseBanner />

      <About />

      <ProductBanner />

      <Crops />

      <CropsTwo />

      <NewsLetter />

      <Footer />
    </div>
  )
}
