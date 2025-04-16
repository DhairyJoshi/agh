import React from "react";
import TopHeader from "../home/TopHeader";
import Footer from "../home/Footer";
import Banner from "./Banner";
import AboutBreadCrumb from "./AboutBreadCrumb";
import Preloader from "../common/Preloader";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import FeaturesSection from "./FeaturesSection";
import Vision from "./Vision";
import Mission from "./Mission";
import Testimonial from "./Testimonial";
import Team from "./Team";
 
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
                <FeaturesSection />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                <Vision />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                <Mission />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                <section className='py-80'>
                    <Testimonial />
                </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                <Team />
            </ScrollAnimation>

            <Footer />
        </div>
    );
}
