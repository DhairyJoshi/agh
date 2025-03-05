import React from 'react'
import TopHeader from '../home/TopHeader'
import Facilities from '../home/Facilities'
import Footer from '../home/Footer'
import Breadcrumbs from '../common/Breadcrumbs'
import CheckoutForm from './CheckoutForm'
import { useLocation } from 'react-router-dom'

export default function Checkout() {
    const location = useLocation()
    return (
        <div>
            <TopHeader />
            <Breadcrumbs main={"Checkout"} parent={"Checkout"} />
            <CheckoutForm subtotal={location?.state?.data} discount={location?.state?.discount} />
            <Facilities />
            <Footer />
        </div>
    )
}
