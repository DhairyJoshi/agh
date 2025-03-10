import React from 'react'
import Products from '../products/ProductPage'

export default function AllProducts(props) {
    return (
        <div>
            <div className="container container-lg">
                <div className="section-heading">
                    <div className="flex-between flex-wrap gap-8">
                        <h5 className="mb-0">You might like</h5>
                    </div>
                </div>
            </div>
            <Products save={props?.save} isUpdate={props?.isUpdate} />
        </div>
    )
}
