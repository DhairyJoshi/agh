import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import QuantityControl from '../../helper/QuantityControl'
import { useDispatch, useSelector } from 'react-redux'
import { add_to_cart_list } from '../../redux/actions/ProductAction'
import * as ProductAction from '../../redux/actions/ProductAction'
import { ROUTES } from '../../constant/routes'
import { IMAGE } from '../../redux/apis/Api'
import { bindActionCreators } from 'redux'
import Login from '../login/Login'
import AlertMessage from '../common/AlertMessage'
import { Alert } from '@mui/material'
import { all_promocode_list } from '../../redux/actions/CheckoutAction'

export default function AddedProducts() {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const cart = useSelector((state) => state.products?.cartData)
    const promocodes = useSelector((state) => state?.checkout?.promocodes)
    const { addtoCart } = bindActionCreators(ProductAction, dispatch)
    const [save, setSave] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const login = JSON.parse(localStorage.getItem('login'))
    const [openLogin, setOpenLogin] = useState(false)
    const navigation = useNavigate()

    console.log("cart", cart)

    useEffect(() => {
        (async () => {
            dispatch(add_to_cart_list({ user_id: user?.data?.id || null }))
            dispatch(all_promocode_list({ user_id: user?.data?.id || null }))
        })()
    }, [save, login])

    const addToCart = async (data, status = true, qty, remove = false) => {
        console.log("Data", data, status, qty)
        if (login) {
            const resData = await addtoCart({
                user_id: user?.data?.id,
                product_id: data?.id,
                quantity: !remove ? (status ? (Number(qty) + 1) : (Number(qty) - 1)) : 0
            })
            console.log("ResData: ", resData)
            if (resData?.statuscode === 200) {
                setSave(!save)
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

    const calculateTotal = () => {
        return cart?.data?.reduce((total, item) => {
            return total + (Number(item.product.price <= item.product.final_price ? item.product.final_price : item.product.price) * Number(item.quantity));
        }, 0).toFixed(2);
    }
    const calculateTotalDiscount = () => {
        return cart?.data?.reduce((total, item) => {
            return total + (Number(item.product.final_price) * Number(item.quantity));
        }, 0).toFixed(2);
    }


    return (
        <section className="cart py-80">
            <Login open={openLogin} state={setOpenLogin} />
            <AlertMessage open={isOpen} message={message} state={setIsOpen} />
            <div className="container-fluid container-lg-x">
                <div className="row gy-4">
                    <div className="col-xl-9 col-lg-8">
                        <div className="cart-table border border-gray-100 rounded-8 px-40 py-48">
                            <div className="overflow-x-auto scroll-sm scroll-sm-horizontal">
                                <table className="table style-three">
                                    <thead>
                                        <tr>
                                            <th className="h6 mb-0 text-lg fw-bold">Delete</th>
                                            {/* <th className="h6 mb-0 text-lg fw-bold">Image</th> */}
                                            <th className="h6 mb-0 text-lg fw-bold">Product Name</th>
                                            <th className="h6 mb-0 text-lg fw-bold">Price</th>
                                            <th className="h6 mb-0 text-lg fw-bold">Quantity</th>
                                            <th className="h6 mb-0 text-lg fw-bold">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart?.data?.length ?

                                                cart && cart?.data?.map((data, index) => (
                                                    <tr key={index}>
                                                        <td style={{ padding: 0 }}>
                                                            <button
                                                                type="button"
                                                                className="remove-tr-btn flex-align gap-12 hover-text-danger-600"
                                                                onClick={() => addToCart(data?.product, true, Number(data?.quantity), true)}

                                                            >
                                                                <i className="ph ph-x-circle text-2xl d-flex" />

                                                            </button>
                                                        </td>
                                                        <td style={{ padding: 0 }}>
                                                            <div className="table-product d-flex align-items-center gap-24">
                                                                <Link
                                                                    to={ROUTES.productDetails + "/" + data?.product?.slug}
                                                                    className="table-product__thumb border-x border-gray-100 rounded-8 flex-center "
                                                                >
                                                                    <img
                                                                        src={IMAGE + data?.product?.image}
                                                                        alt=""
                                                                    />
                                                                </Link>
                                                                <div className="table-product__content text-start">
                                                                    <h6 className="title text-lg fw-semibold mb-8">
                                                                        <Link
                                                                            to={ROUTES.productDetails + "/" + data?.product?.slug}
                                                                            className="link text-line-2"
                                                                            tabIndex={0}
                                                                        >
                                                                            {data?.product?.product_name}
                                                                        </Link>
                                                                    </h6>


                                                                </div>
                                                            </div>
                                                        </td>
                                                        {
                                                            data?.product?.price <= data?.product?.final_price ?
                                                                <td style={{ padding: 0 }}>
                                                                    <span className="text-lg h6 mb-0 fw-semibold">₹{Number(data?.product?.final_price).toFixed(2)} </span><br />
                                                                    {/* <span className="text-sm mb-0 fw-semibold">₹{Number(data?.product?.final_price).toFixed(2)} </span> */}
                                                                </td>
                                                                :
                                                                <td style={{ padding: 0 }}>
                                                                    <span style={{ textDecoration: "line-through" }} className="text-sm mb-0 fw-semibold mr-1">₹{Number(data?.product?.price).toFixed(2)} </span>
                                                                    <span className="text-lg h6 mb-0 fw-semibold">₹{Number(data?.product?.final_price).toFixed(2)} </span>
                                                                </td>

                                                        }

                                                        <td style={{ padding: 0 }}>
                                                            <div className="d-flex rounded-4 overflow-hidden">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => addToCart(data?.product, false, Number(data?.quantity))}
                                                                    className="quantity__minus border border-end border-gray-100 flex-shrink-0 h-48 w-48 text-neutral-600 flex-center hover-bg-main-600 hover-text-white"
                                                                >
                                                                    <i className="ph ph-minus" />
                                                                </button>
                                                                <input
                                                                    type="number"
                                                                    className="quantity__input flex-grow-1 border border-gray-100 border-start-0 border-end-0 text-center w-32 px-4"
                                                                    value={Number(data?.quantity)}
                                                                    min={1}
                                                                    readOnly
                                                                />
                                                                <button
                                                                    type="button"
                                                                    // onClick={incrementQuantity}
                                                                    onClick={() => addToCart(data?.product, true, Number(data?.quantity))}

                                                                    className="quantity__plus border border-end border-gray-100 flex-shrink-0 h-48 w-48 text-neutral-600 flex-center hover-bg-main-600 hover-text-white"
                                                                >
                                                                    <i className="ph ph-plus" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        {
                                                            data?.product?.price <= data?.product?.final_price ?
                                                                <td style={{ padding: 0 }}>
                                                                    <span className="text-lg h6 mb-0 fw-semibold">₹ {(Number(data?.product?.final_price) * Number(data?.quantity)).toFixed(2)}</span>
                                                                </td>
                                                                :
                                                                <td style={{ padding: 0 }}>
                                                                    <span className="text-lg h6 mb-0 fw-semibold">₹ {(Number(data?.product?.final_price) * Number(data?.quantity)).toFixed(2)}</span>
                                                                </td>
                                                        }

                                                    </tr>

                                                ))

                                                :
                                                <tr>
                                                    <td colSpan={5}>
                                                        <span style={{ display: "flex", justifyContent: "center" }}>
                                                            No data available !

                                                        </span>
                                                    </td>
                                                </tr>
                                        }



                                    </tbody>
                                </table>
                            </div>
                            {/* <div className="flex-between flex-wrap gap-16 mt-16">
                                <div className="flex-align gap-16">
                                    <input
                                        type="text"
                                        className="common-input"
                                        placeholder="Coupon Code"
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-main py-18 w-100 rounded-8"
                                    >
                                        Apply Coupon
                                    </button>

                                </div>


                            </div> */}
                            <div className="col-xl-6 col-lg-6 col-md-6">

                                {/* <div className="flex-wrap gap-16 mt-16" >
                                    {
                                        promocodes && promocodes?.data?.map((data, index) => (
                                  
                                            <div key={index}>
                                                <div className='flex-between mt-10' style={{ background: "#e6f9ef", padding: "14px", borderRadius: "10px", color: "green" }}>
                                                    <p>
                                                        {
                                                            data?.promocode_type === "Percentage" ?
                                                                <>Apply <strong>{data?.promocode}</strong> to get <strong>{data?.promocode_value}% off</strong></>
                                                                :
                                                                <>Apply <strong>{data?.promocode}</strong> to get <strong>₹{data?.promocode_value} off</strong></>
                                                        }
                                                    </p>
                                                    <p style={{ fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}>
                                                        Apply
                                                    </p>
                                                </div>
                                                <span style={{ fontSize: "10px" }}>To use this promo code, ensure your cart value is at least ₹ {data?.minimum_amount}.</span>
                                            </div>
                                        ))
                                    }
                                </div> */}
                            </div>


                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="cart-sidebar border border-gray-100 rounded-8 px-24 py-40">
                            <h6 className="text-xl mb-32">Cart Totals</h6>
                            <div className="bg-color-three rounded-8 p-24">
                                <div className="mb-32 flex-between gap-8">
                                    <span className="text-gray-900 font-heading-two">Subtotal</span>
                                    <span className="text-gray-900 fw-semibold">₹{(calculateTotal() - Number(cart?.tax?.gst) || 0).toFixed(2)}</span>
                                </div>
                                <div className="mb-32 flex-between gap-8">
                                    <span className="text-gray-900 font-heading-two">
                                        GST
                                    </span>
                                    <span className="text-gray-900 fw-semibold">₹{Number(cart?.tax?.gst || 0).toFixed(2)}</span>
                                </div>
                                {/* <div className="mb-32 flex-between gap-8">
                                    <span className="text-gray-900 font-heading-two">
                                        SGST
                                    </span>
                                    <span className="text-gray-900 fw-semibold">₹{Number(cart?.tax?.sgst || 0).toFixed(2)}</span>
                                </div> */}
                                {
                                    (calculateTotalDiscount() - calculateTotal()) < 0 ?
                                        <div className="mb-0 flex-between gap-8">
                                            <span className="text-gray-900 font-heading-two">
                                                Discount
                                            </span>
                                            <span className="text-gray-900 fw-semibold">- ₹{Math.abs((calculateTotalDiscount() - calculateTotal())).toFixed(2)}</span>
                                        </div>
                                        :
                                        <></>
                                }

                            </div>
                            <div className="bg-color-three rounded-8 p-24 mt-24">
                                <div className="flex-between gap-8">
                                    <span className="text-gray-900 text-xl fw-semibold">Total</span>
                                    <span className="text-gray-900 text-xl fw-semibold">₹{(calculateTotalDiscount()) || 0}</span>
                                </div>
                            </div>
                            <p style={{ color: "red", fontSize: "12px" }}> Note : Delivery via RTC cargo, you pay and collect</p>

                            <button
                                disabled={!cart?.data?.length}
                                to="/checkout"
                                onClick={() => navigation(ROUTES.checkout, { state: { data: (calculateTotal() - Number(cart?.tax?.gst) || 0).toFixed(2), discount: ((calculateTotalDiscount() - calculateTotal()) < 0) ? calculateTotalDiscount() - calculateTotal() : 0 } })}
                                className="btn btn-main mt-40 py-18 w-100 rounded-8"
                            >
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >)
}
