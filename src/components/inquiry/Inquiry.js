import React from 'react'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../home/Footer'
import InquiryForm from './InquiryForm'
import ScrollToTop from 'react-scroll-to-top'
import PreloaderTwo from '../common/PreloaderTwo'

export default function ContactUs() {
    return (
        <>
            <PreloaderTwo />
            <ScrollToTop smooth color="#299E60" />
            <TopHeader />
            <Breadcrumbs main={"Home"} parent={"Inquiry"} />
            <InquiryForm/>
            <Footer />
        </>
    )
}