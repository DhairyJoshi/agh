import React from 'react'
import TopHeader from '../home/TopHeader'
import Footer from '../home/Footer'
import Banner from './Banner'
import AboutBreadCrumb from './AboutBreadCrumb'
import AboutContent from './AboutContent'

export default function About() {
    return (
        <div>
            <TopHeader />
            <AboutBreadCrumb main={"About"} parent={"About Us"} />
            <Banner />
            <AboutContent />
            <Footer />
        </div>
    )
}