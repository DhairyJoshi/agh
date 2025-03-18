import React from 'react'
import TopHeader from '../home/TopHeader'
import Footer from '../home/Footer'
import Banner from './Banner'
import AboutBreadCrumb from './AboutBreadCrumb'
import AboutContent from './AboutContent'
import Preloader from '../common/Preloader'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.compat.css"

export default function About() {
    return (
        <div>
            <Preloader />

            <TopHeader />

            <AboutBreadCrumb main={"About"} parent={"About Us"} />

            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                <Banner />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                <AboutContent />
            </ScrollAnimation>

            <Footer />
        </div>
    )
}