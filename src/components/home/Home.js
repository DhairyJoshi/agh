import React from 'react'
import TopHeader from './TopHeader'
import AdvertiseBanner from './AdvertiseBanner'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import ProductBanner from './ProductBanner'
import Crops from './Crops'

export default function Home() {
  return (
    <div>
      <TopHeader />

      <AdvertiseBanner />

      <ProductBanner />

      <Crops />

      <NewsLetter />

      <Footer />
    </div>
  )
}
