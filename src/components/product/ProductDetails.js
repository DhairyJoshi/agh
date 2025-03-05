import React, { useEffect, useState } from 'react'
import TopHeader from '../home/TopHeader'
import Details from './Details'
import Breadcrumbs from '../common/Breadcrumbs'
import Facilities from '../home/Facilities'
import Footer from '../home/Footer'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const params = useParams()
    const [product, setProduct] = useState(null)
    const [save, setSave] = useState(false)

    useEffect(() => {
        setSave(!save)
    }, [params?.slug])

    return (
        <div>
            <TopHeader isUpdate={save} />
            <Breadcrumbs main={"Product Details"} parent={"Product"} child={product} />
            <Details slug={params?.slug} data={setProduct} save={setSave} isUpdate={save} />
            <Facilities />
            <Footer />
        </div>
    )
}
