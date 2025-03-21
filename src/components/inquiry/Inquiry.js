import React, { useEffect } from 'react'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../home/Footer'
import InquiryForm from './InquiryForm'
import ScrollToTop from 'react-scroll-to-top'
import PreloaderTwo from '../common/PreloaderTwo'
import { useLocation } from 'react-router-dom'

export default function ContactUs() {
    const { pathname } = useLocation();

    useEffect(() => {
        // This runs after route change
        console.log("Scroll effect triggered for:", pathname);

        // Wait for DOM to update
        requestAnimationFrame(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant" // can use "smooth" too
            });
        });
    }, [pathname]);

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