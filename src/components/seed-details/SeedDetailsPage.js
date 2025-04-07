import React from 'react'
import PreloaderTwo from '../common/PreloaderTwo'
import ScrollToTop from 'react-scroll-to-top'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../home/Footer'
import SeedDetails from './SeedDetails'

const SeedDetailsPage = () => {
  return (
    <>
        <PreloaderTwo />

        <ScrollToTop smooth color="#299E60" />

        <TopHeader />

        <Breadcrumbs main="Seeds" />

        <SeedDetails />

        <Footer />
    </>
  )
}

export default SeedDetailsPage
