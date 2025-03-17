import React from 'react'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../home/Footer'
import InquiryForm from './InquiryForm'

export default function ContactUs() {
    return (
        <div>
            <TopHeader />
            <Breadcrumbs main={"Home"} parent={"Inquiry"} />
            <InquiryForm/>
            <Footer />
        </div>
    )
}