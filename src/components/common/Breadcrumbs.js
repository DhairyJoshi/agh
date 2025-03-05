import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumbs(props) {
    return (
        <div className="breadcrumb py-26 bg-color-one">
            <div className="container container-lg">
                <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
                    <h6 className="mb-0">{props?.main}</h6>
                    <ul className="flex-align gap-8 flex-wrap">
                        <li className="text-sm">
                            <Link to="/" className="text-main-600 flex-align gap-8">
                                <i className="ph ph-house" />
                                Home
                            </Link>
                        </li>
                        <li className="flex-align text-gray-500">
                            <i className="ph ph-caret-right" />
                        </li>
                        <li className="text-sm">
                            <div to="/shop" className="text-main-600 flex-align gap-8">
                                {props?.parent}
                            </div>
                        </li>
                        {
                            props?.child &&
                            <li className="flex-align text-gray-500">
                                <i className="ph ph-caret-right" />
                            </li>
                        }

                        <li className="text-sm text-neutral-600">
                            {props?.child}

                        </li>
                    </ul>
                </div>
            </div>
        </div>)
}
