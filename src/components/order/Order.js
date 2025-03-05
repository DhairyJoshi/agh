import React from 'react'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs'
import Footer from '../home/Footer'
import OrderList from './OrderList'

export default function Order() {
    return (
        <div>
            <TopHeader />
            <Breadcrumbs main={"Orders"} parent={"My Orders"} />
            <OrderList />
            <Footer />
        </div>
    )
}
