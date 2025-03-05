import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { all_offers_list } from '../../redux/actions/HomeAction'
import Login from '../login/Login'
import AlertMessage from '../common/AlertMessage'
import { bindActionCreators } from 'redux'
import { ROUTES } from '../../constant/routes'
import { IMAGE } from '../../redux/apis/Api'
import { Link } from 'react-router-dom'
import * as ProductAction from '../../redux/actions/ProductAction'
import { Alert } from '@mui/material'
import Grid from '@mui/material/Grid2';


export default function Offers(props) {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const all_products = useSelector((state) => state?.home?.offers)
    const login = JSON.parse(localStorage.getItem('login'))
    const [openLogin, setOpenLogin] = useState(false)
    const { addtoCart } = bindActionCreators(ProductAction, dispatch)
    const [save, setSave] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(null);




    useEffect(() => {
        dispatch(all_offers_list({ user_id: user?.data?.id }))
    }, [save, login])



    const addToCart = async (data, status = true) => {
        // console.log("Data")
        if (login) {
            const resData = await addtoCart({
                user_id: user?.data?.id,
                product_id: data?.product?.id,
                quantity: status ? (Number(data?.cart_quantity) + 1) : (Number(data?.cart_quantity) - 1)
            })
            console.log("ResData: ", resData)
            if (resData?.statuscode === 200) {
                setSave(!save)
                if (!props?.flag) {
                    props?.save(!props?.isUpdate)

                }
                else {
                    props?.save(!props?.isUpdate)

                }

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
        <>
            {all_products?.data?.length ?
                <section className="recommended pb-20">
                    <Login open={openLogin} state={setOpenLogin} />
                    <AlertMessage open={isOpen} message={message} state={setIsOpen} />
                    <div className="container container-lg">
                        {
                            !props?.flag ?
                                <div className="section-heading">
                                    <div className="flex-between flex-wrap gap-8">
                                        <h5 className="mb-0">Available offers</h5>
                                        {/* <Link
                             to="/shop"
                             className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                         >
                             All Vendors
                         </Link> */}
                                    </div>
                                </div>
                                :
                                <></>
                        }



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
                                            <div key={index} className="col-xxl-3 col-lg-4 col-sm-4 col-12">
                                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                                    {
                                                        <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-black" style={{ position: "absolute" }}>
                                                            Offer
                                                        </span>

                                                    }

                                                    <Link
                                                        to={`${ROUTES.productDetails + "/" + data?.product.slug}`}
                                                        className="product-card__thumb-x flex-center responsive-img-width"
                                                    >
                                                        <img src={`${IMAGE + data?.images?.[0] || "assets/images/thumbs/product-img18.png"}`} className=' responsive-img' alt="" />
                                                    </Link>
                                                    <div className="product-card__content p-sm-2" style={{ width: "100%" }}>
                                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                                            <Link
                                                                to={`${ROUTES.productDetails + "/" + data?.product.slug}`}
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
                                                            {data?.product?.description?.length <= 75 ? data?.product?.description : data?.product?.description?.substring(0, 75) + "..."}
                                                        </p>
                                                        <div className="product-card__content mt-12">

                                                            <div className="product-card__price mb-8">
                                                                <span className="text-gray-500 fw-normal">Price : </span>{" "}
                                                                {
                                                                    (Number(data?.product.final_price) > Number(data?.offer_amount)) ?
                                                                        < span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                                            ₹{data?.product?.final_price}{" "}
                                                                        </span>
                                                                        :
                                                                        <></>

                                                                }

                                                                <span className="text-heading text-md fw-semibold ">
                                                                    {" "} ₹{data?.offer_amount}{" "}
                                                                </span>

                                                            </div>


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
                :
                <>
                    <div className='container py-20'>
                        <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
                            <Grid size={6}>
                                <Alert severity="warning" style={{ borderRadius: "10px", fontSize: "17px" }} className='p-20'>Unfortunately, no offers are available at this time.</Alert>
                            </Grid>
                        </Grid>
                    </div>
                </>
            }
        </>

    )
}
