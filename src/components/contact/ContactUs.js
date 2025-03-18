import React from 'react'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../home/Footer'
import ContactForm from './ContactForm'
import Preloader from '../common/Preloader'

export default function ContactUs() {
    return (
        <div>
            <Preloader />
            <TopHeader />
            <Breadcrumbs main={"Contact"} parent={"Contact Us"} />
            <ContactForm/>
            <Footer />
        </div>
    )
}