import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getDealOfDay } from '../../redux/actions/HomeAction';
import * as ProductAction from '../../redux/actions/ProductAction';
import logo from '../../assets/images/favicon.png'
import { IMAGE } from '../../redux/apis/Api';
import { getCountdown } from '../../helper/Countdown';
import { ROUTES } from '../../constant/routes';
import Login from '../login/Login';
import AlertMessage from '../common/AlertMessage';
import { bindActionCreators } from 'redux';



export default function DealOfDay(props) {
    const dispatch = useDispatch()

    const dealOfDay = useSelector((state) => state?.home?.dealOfDay)
    const user = JSON.parse(localStorage.getItem('user'))
    const { addtoCart } = bindActionCreators(ProductAction, dispatch)
    const [save, setSave] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const login = JSON.parse(localStorage.getItem('login'))
    const [openLogin, setOpenLogin] = useState(false)

    useEffect(() => {
        (async () => {
            dispatch(getDealOfDay({ user_id: user?.data?.id || null }))
        })()
    }, [save, login])

    const addToCart = async (data, status = true, qty) => {
        console.log("Data", data, status)
        if (login) {
            const resData = await addtoCart({
                user_id: user?.data?.id,
                product_id: data?.id,
                quantity: status ? (Number(qty) + 1) : (Number(qty) - 1)
            })
            console.log("ResData: ", resData)
            if (resData?.statuscode === 200) {
                setSave(!save)
                props?.save(!props?.isUpdate)

                setIsOpen(true)
                setMessage({ ...message, message: resData?.message, flag: "success" })
            }
            else {
                setIsOpen(true)
                setMessage({ ...message, message: resData?.message, flag: "error" })
            }
        }
        else {
            setOpenLogin(true)
        }
    }


    return (
        <section className="best sells pb-80">
            <Login open={openLogin} state={setOpenLogin} />
            <AlertMessage open={isOpen} message={message} state={setIsOpen} />
            {
                dealOfDay && dealOfDay?.data?.length ?
                    <div className="container container-lg">
                        <div className="section-heading">
                            <div className="flex-between flex-wrap gap-8">
                                <h5 className="mb-0">Deal of the day</h5>
                            </div>
                        </div>
                        <div className="row g-12">
                            <div className="col-xxl-12">
                                <div className="row gy-4">
                                    {
                                        dealOfDay && dealOfDay?.data?.map((data, index) => (
                                            <div className="col-md-6" key={index} >
                                                <div className="product-card style-two h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 flex-align gap-16">
                                                    <div className="">
                                                        <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white" style={{ position: "absolute" }}>
                                                            ₹{Number(data?.product_final_price) - Number(data?.deal_of_the_day_final_amount)} Off
                                                        </span>
                                                        <Link
                                                            to={`${ROUTES.productDetails + "/" + data?.product?.slug}`}
                                                            className="product-card__thumb flex-center"
                                                        >
                                                            <img src={IMAGE + data?.images?.[0]} alt="" />
                                                        </Link>

                                                    </div>
                                                    <div className="product-card__content" style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                                                        <div>
                                                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                                                <Link
                                                                    to={`${ROUTES.productDetails + "/" + data?.product?.slug}`}
                                                                    className="link text-line-2">
                                                                    {data?.product?.product_name}
                                                                </Link>
                                                            </h6>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-main-600 text-md d-flex">
                                                                    <i className="ph-fill ph-storefront" />
                                                                </span>
                                                                <span className="text-gray-500 text-xs">
                                                                    By {(data?.vendor && data?.vendor !== "null") ? data?.vendor?.company_name : data?.admin?.name}
                                                                </span>
                                                            </div>
                                                            <p>
                                                                {data?.product?.description?.length <= 75 ? data?.product?.description : data?.product.description?.substring(0, 75) + "..."}
                                                            </p>
                                                            <div className="product-card__price mb-8">
                                                                <span className="text-gray-500 fw-normal">Price : </span>{" "}
                                                                < span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                                    ₹{data?.product_final_price}{" "}
                                                                </span>



                                                                <span className="text-heading text-md fw-semibold ">
                                                                    {" "} ₹{data?.deal_of_the_day_final_amount}{" "}
                                                                </span>

                                                            </div>
                                                            {/* <div className="mt-12">
                                                                <div
                                                                    className="progress w-100  bg-color-three rounded-pill h-4"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={35}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-main-600 rounded-pill"
                                                                        style={{ width: "35%" }}
                                                                    />
                                                                </div>
                                                                <span className="text-gray-900 text-xs fw-medium mt-8">
                                                                    Sold: 18/35
                                                                </span>
                                                            </div> */}
                                                        </div>
                                                        {
                                                            data?.cart_quantity === 0 || !data?.cart_quantity ?
                                                                <div
                                                                    onClick={() => addToCart(data?.product, true, data?.cart_quantity)}

                                                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-0 w-100 justify-content-center"
                                                                >
                                                                    Add To Cart <i className="ph ph-shopping-cart" />
                                                                </div>
                                                                :
                                                                <div style={{ display: "flex", justifyContent: "center" }} className="border border-gray-100 rounded-pill py-9 px-16 flex-align">
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => addToCart(data?.product, false, data?.cart_quantity)}
                                                                        className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"
                                                                    // onClick={() => addToCart(data, false)}

                                                                    >
                                                                        <i className="ph ph-minus" />
                                                                    </button>
                                                                    <input
                                                                        type="number"
                                                                        className="quantity__input border-0 text-center w-32"
                                                                        value={Number(data?.cart_quantity)} readOnly
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => addToCart(data?.product, true, data?.cart_quantity)}

                                                                        className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"
                                                                    // onClick={() => addToCart(data, true)}

                                                                    >
                                                                        <i className="ph ph-plus" />
                                                                    </button>
                                                                </div>
                                                        }



                                                    </div>
                                                </div>
                                            </div>

                                        ))
                                    }


                                </div>
                            </div>

                        </div>
                    </div>
                    :
                    <></>
            }

        </section>

    )
}
