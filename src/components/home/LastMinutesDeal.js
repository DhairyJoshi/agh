import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLastminutesDeal } from '../../redux/actions/ProductAction'
import logo from '../../assets/images/favicon.png'
import { IMAGE } from '../../redux/apis/Api'
import { ROUTES } from '../../constant/routes'


export default function LastMinutesDeal() {
    const dispatch = useDispatch()
    const lastMinDeal = useSelector((state) => state?.products?.lastMinDeal)
    const user = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        (async () => {
            dispatch(getLastminutesDeal({ user_id: user?.data?.id }))
        })()
    }, [])
    return (
        <section className="top-vendors" style={{ cursor: "pointer" }}>
            {
                lastMinDeal && lastMinDeal?.data?.length ?
                    <div className="container container-lg py-80">
                        <div className="section-heading">
                            <div className="flex-between flex-wrap gap-8">
                                <h5 className="mb-0">Last minute deals</h5>
                                {/* <Link
                            to="/shop"
                            className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                        >
                            All Vendors
                        </Link> */}
                            </div>
                        </div>
                        <div className="row gy-4 vendor-card-wrapper">
                            {
                                lastMinDeal && lastMinDeal?.data?.map((data, index) => (
                                    <div className="col-xxl-3 col-lg-4 col-sm-6" key={index}>
                                        <div className="vendor-card text-center px-16 pb-24">
                                            <div className="">
                                                <img
                                                    src={(data?.vendor && data?.vendor !== "null") ? IMAGE + data?.vendor?.company_logo : logo}
                                                    alt="name"
                                                    className="vendor-card__logo m-12"
                                                />
                                                <p style={{
                                                    fontSize: "20px",
                                                    fontWeight:"bolder"
                                                }} className="title mt-32">{data?.product?.product_name}</p>

                                                <div
                                                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                                                >
                                                    ₹ {Number(data?.product_final_price) - Number(data?.last_min_deal_final_amount)} Off on {data?.product?.product_name}
                                                </div>
                                                <div className="product-card__price mb-8">
                                                    <span className="text-gray-500 fw-normal">Price : </span>{" "}
                                                    < span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                        ₹{data?.product_final_price}{" "}
                                                    </span>



                                                    <span className="text-heading text-md fw-semibold py-10">
                                                        {" "} ₹{data?.last_min_deal_final_amount}{" "}
                                                    </span>

                                                </div>

                                            </div>
                                            <p style={{minHeight:"100px",maxHeight:"100px",overflow:"hidden"}}>
                                                {data?.product?.description?.length <= 75 ? data?.product?.description : data?.product.description?.substring(0, 75) + "..."}
                                            </p>
                                            <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                                                {
                                                    data?.images?.map((data, index) => (
                                                        <div key={index} className="vendor-card__item bg-white rounded-circle flex-center">
                                                            <img src={IMAGE + data} alt="product" />
                                                        </div>
                                                    ))
                                                }



                                            </div>
                                            <Link
                                                to={`${ROUTES.productDetails + "/" + data?.product?.slug}`}
                                                className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8 mt-20"
                                                style={{ maxWidth: "50%", textAlign: "center", margin: "auto", display: "flex", justifyContent: "center" }}
                                            >
                                                <span>
                                                    View <i className="ph ph-eye" />
                                                </span>
                                            </Link>
                                        </div>

                                    </div>
                                ))
                            }



                        </div>
                    </div>
                    :
                    <></>
            }

        </section>
    )
}
