import React from 'react'
import TopHeader from './TopHeader'
import AdvertiseBanner from './AdvertiseBanner'
import NewsLetter from './NewsLetter'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <TopHeader />
      <AdvertiseBanner />

      <NewsLetter />
      <Footer />
    </div>
  )
}
