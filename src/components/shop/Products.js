import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactSlider from 'react-slider'
import { getAllProducts } from '../../redux/actions/ProductAction'
import * as ProductAction from '../../redux/actions/ProductAction'
import { IMAGE } from '../../redux/apis/Api'
import { ROUTES } from '../../constant/routes'
import Login from '../login/Login'
import AlertMessage from '../common/AlertMessage'
import { bindActionCreators } from 'redux'
export default function Products(props) {
    const dispatch = useDispatch()
    const all_products = useSelector((state) => state?.products?.products)
    const user_id = JSON.parse(localStorage.getItem('user'))
    const user = JSON.parse(localStorage.getItem('user'))
    const login = JSON.parse(localStorage.getItem('login'))
    const [openLogin, setOpenLogin] = useState(false)
    const { addtoCart } = bindActionCreators(ProductAction, dispatch)
    const [save, setSave] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(null);
    useEffect(() => {
        (async () => {
            dispatch(getAllProducts({ user_id: user_id?.data?.id || null }))
        })()
    }, [save, login])


    const addToCart = async (data, status = true) => {
        // console.log("Data")
        if (login) {
            const resData = await addtoCart({
                user_id: user?.data?.id,
                product_id: data?.id,
                quantity: status ? (Number(data?.cart_quantity) + 1) : (Number(data?.cart_quantity) - 1)
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
        <section className="recommended pb-20">
            <Login open={openLogin} state={setOpenLogin} />
            <AlertMessage open={isOpen} message={message} state={setIsOpen} />
            <div className="container container-lg">

                <div className="tab-content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="pills-all"
                        role="tabpanel"
                        aria-labelledby="pills-all-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            {
                                all_products && all_products?.data?.map((data, index) => (
                                    <div key={index} className="col-xxl-3 col-lg-4 col-sm-6 col-12">
                                        <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                            {
                                                (data?.discount && data?.discount !== "null" && Number(data?.price) > Number(data?.final_price) && (!data?.offers || data?.offers === "null")) ?
                                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                                        ₹{(Number(data?.price) - Number(data?.final_price)).toFixed(2)} Off
                                                    </span>
                                                    :
                                                    <></>
                                            }
                                            {
                                                (data?.offers && data?.offers !== "null") ?
                                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-black">
                                                        {data?.offers?.name}
                                                    </span>
                                                    :
                                                    <></>
                                            }

                                            <Link
                                                to={`${ROUTES.productDetails + "/" + data?.slug}`}
                                                className="product-card__thumb-x flex-center responsive-img-width"
                                            >
                                                <img src={`${IMAGE + data?.image || "assets/images/thumbs/product-img18.png"}`} className=' responsive-img' alt="" />
                                            </Link>
                                            <div className="product-card__content p-sm-2" style={{ width: "100%" }}>
                                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                                    <Link
                                                        to={`${ROUTES.productDetails + "/" + data?.slug}`}
                                                        className="link text-line-2">
                                                        {data?.product_name}
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
                                                    {data?.description?.length <= 75 ? data?.description : data?.description?.substring(0, 75) + "..."}
                                                </p>
                                                <div className="product-card__content mt-12">
                                                    {
                                                        (data?.offers && data?.offers !== "null") ?
                                                            <div className="product-card__price mb-8">
                                                                <span className="text-gray-500 fw-normal">Special Price : </span>{" "}
                                                                {
                                                                    Number(data?.price) > Number(data?.offers?.offer_amount) &&
                                                                    < span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                                        ₹{data?.final_price}{" "}
                                                                    </span>

                                                                }

                                                                <span className="text-heading text-md fw-semibold ">
                                                                    {" "} ₹{data?.offers?.offer_amount}{" "}
                                                                </span>

                                                            </div>
                                                            :
                                                            <div className="product-card__price mb-8">
                                                                <span className="text-gray-500 fw-normal">Price : </span>{" "}
                                                                {
                                                                    (data?.discount && data?.discount !== "null" && data?.discount !== 0 && Number(data?.price) > Number(data?.final_price)) ?
                                                                        < span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                                            ₹{data?.price}{" "}
                                                                        </span>
                                                                        :
                                                                        <></>

                                                                }

                                                                <span className="text-heading text-md fw-semibold ">
                                                                    {" "} ₹{data?.final_price}{" "}
                                                                </span>

                                                            </div>
                                                    }

                                                    {
                                                        Number(data?.cart_quantity) === 0 &&
                                                        <div
                                                            className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                                            onClick={() => addToCart(data, true)}
                                                        >
                                                            Add To Cart <i className="ph ph-shopping-cart" />
                                                        </div>

                                                    }


                                                </div>

                                            </div>
                                            {
                                                Number(data?.cart_quantity) > 0 &&
                                                <div style={{ width: "100%", justifyContent: "center" }} className="border border-gray-100 rounded-pill py-9 px-16 flex-align">
                                                    <button
                                                        type="button"
                                                        className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"
                                                        onClick={() => addToCart(data, false)}

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
                                                        className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"
                                                        onClick={() => addToCart(data, true)}

                                                    >
                                                        <i className="ph ph-plus" />
                                                    </button>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                ))
                            }



                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}
