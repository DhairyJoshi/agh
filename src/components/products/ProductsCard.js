import React from 'react'
import { Link } from 'react-router-dom'

const ProductsCard = ({ product }) => {
    return (
        <div className="product-card p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2" style={{ height: '28rem' }}>
            <Link
                to={`/product-details/${product.id}`}
                className="w-100 d-flex justify-content-center align-items-center overflow-hidden rounded-8 position-relative" style={{ height: '16rem' }}
            >
                <img
                    src={ product.images }
                    style={{ width:'auto', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
                { product.bestsale &&
                    (<span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                        Best Sale
                    </span>)
                }
                { product.sale &&
                    (<span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                        Sale { product.salePercent }%
                    </span>)
                }
                { product.prodNew &&
                    (<span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                        New
                    </span>)
                }
            </Link>
            <div className="product-card__content w-100 mt-16">
                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link
                        to={`/product-details/${product.id}`}
                        className="link text-line-2"
                        tabIndex={0}
                    >
                        { product.title }
                    </Link>
                </h6>
                <div className="d-flex justify-content-between align-items-center mb-20 mt-16 gap-6">
                    <span className="text-heading text-md fw-semibold ">
                        &#8377;{ product.price } <span className="text-gray-500 fw-normal"></span>{" "}
                    </span>
                    <div className="d-flex justify-content-center align-items center">
                        <span className="text-xs fw-medium text-gray-500 me-5">{ product.rating }</span>
                        <span className="text-15 fw-medium text-warning-600 d-flex">
                            <i className="ph-fill ph-star" />
                        </span>
                    </div>
                </div>
                {/* <div className="mt-8">
                    <div
                        className="progress w-100 bg-color-three rounded-pill h-4"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={35}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        <div
                            className="progress-bar bg-main-two-600 rounded-pill"
                            style={{ width: "35%" }}
                        />
                    </div>
                    <span className="text-gray-900 text-xs fw-medium mt-8">
                        Sold: 18/35
                    </span>
                </div> */}
                {/* <div className="product-card__price my-20">
                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                        $28.99
                    </span>
                    <span className="text-heading text-md fw-semibold ">
                        &#8377;{price} <span className="text-gray-500 fw-normal"></span>{" "}
                    </span>
                </div> */}
                <Link
                    to="#"
                    className="product-card__cart w-100 btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white px-24 rounded-8 flex-center gap-8 fw-medium"
                    tabIndex={0}
                >
                    Inquire More<i className="ph ph-whatsapp-logo fs-4" />
                </Link>
            </div>
        </div>
    )
}

export default ProductsCard
