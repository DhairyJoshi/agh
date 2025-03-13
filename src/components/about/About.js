import React from 'react'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../home/Footer'

export default function About() {
    return (
        <div>
            <TopHeader />
            <Breadcrumbs main={"Home"} parent={"About Us"} />
            <Footer />
        </div>
    )
}