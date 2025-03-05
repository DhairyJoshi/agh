import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getCountdown } from '../../helper/Countdown';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/ProductAction';
import * as ProductAction from '../../redux/actions/ProductAction';
import { IMAGE } from '../../redux/apis/Api';
import Login from '../login/Login';
import { bindActionCreators } from 'redux';
import AlertMessage from '../common/AlertMessage';
import offerBg from '../../assets/images/details-offer-bg.png'

const Details = (props) => {
    const dispatch = useDispatch()

    const product = useSelector((state) => state?.products?.productDetails)
    const [mainImage, setMainImage] = useState(IMAGE + product?.data?.images?.[0]);
    const user = JSON.parse(localStorage.getItem('user'))
    const login = JSON.parse(localStorage.getItem('login'))
    const [openLogin, setOpenLogin] = useState(false)
    const { addtoCart, wishlist_update } = bindActionCreators(ProductAction, dispatch)
    const [save, setSave] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        if (product?.statuscode === 200) {
            props?.data(product?.data?.product_name)
            setMainImage(IMAGE + product?.data?.images?.[0])
        }
    }, [product])

    useEffect(() => {
        (async () => {
            dispatch(getProductDetails({ slug: props?.slug, user_id: user?.data?.id || null }))

        })()
    }, [save, login,props?.slug])

    useEffect(() => {
        // Function to calculate the time remaining until the next day
        const calculateTimeLeft = () => {
            const now = new Date();

            if (product?.data?.offers?.name === 'Deal Of Day') {
                const now = new Date();
                const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); // Midnight of next day
                const difference = nextDay - now;

                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ hours, minutes, seconds });
            }
            else if (product?.data?.offers?.name === 'Last Minute Deal') {
                console.log("Here")
                const localArr = product?.data?.offers?.end_time?.split(':')
                // Specific end time (e.g., 23:12:12)
                const todayEndTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Number(localArr?.[0]), Number(localArr?.[1]), Number(localArr?.[2])); // End time set to 23:12:12

                const difference = todayEndTime - now;

                if (difference > 0) {
                    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                    const minutes = Math.floor((difference / (1000 * 60)) % 60);
                    const seconds = Math.floor((difference / 1000) % 60);

                    setTimeLeft({ hours, minutes, seconds });
                }

            } else if (true) {

            }

        };

        // Run the countdown calculation every second
        const timer = setInterval(() => {
            calculateTimeLeft();
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, [product]);

    console.log("product", product)

    // increment & decrement
    const [quantity, setQuantity] = useState(product?.data?.cart_quantity);

    const addToCart = async (status = true) => {
        // console.log("Data")
        if (login) {
            const resData = await addtoCart({
                user_id: user?.data?.id,
                product_id: product?.data?.id,
                quantity: status ? (Number(product?.data?.cart_quantity) + 1) : (Number(product?.data?.cart_quantity) - 1)
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

    const addToWishlist = async () => {
        if (login) {
            const resData = await wishlist_update({
                user_id: user?.data?.id,
                product_id: product?.data?.id
            })
            console.log("res", resData)
            if (resData?.statuscode === 200) {
                setSave(!save)
                props?.save(!props?.isUpdate)

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


    const settingsThumbs = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
    };
    return (
        <section className="product-details py-20">
            <Login open={openLogin} state={setOpenLogin} />
            <AlertMessage open={isOpen} message={message} state={setIsOpen} />

            <div className="container container-lg">
                <div className="row gy-4">
                    <div className="col-lg-9">
                        <div className="row gy-4">
                            <div className="col-xl-6">
                                <div className="product-details__left">
                                    <div className="product-details__thumb-slider border border-gray-100 rounded-16" style={{ padding: "0" }}>
                                        <div className="">
                                            <div className="product-details__thumb flex-center h-100">
                                                <img src={mainImage} alt="Main Product" style={{ height: "300px", width: "100%" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-24">
                                        <div className="product-details__images-slider">
                                            <Slider style={{ width: "90%", margin: "auto" }} {...settingsThumbs}>
                                                {product?.data?.images?.map((image, index) => (
                                                    <div className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8" key={index} onClick={() => setMainImage(IMAGE + image)}>
                                                        <img className='thum' src={IMAGE + image} alt={`Thumbnail ${index}`} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="product-details__content">
                                    {
                                        product?.data?.offers && product?.data?.offers !== "null" &&
                                        <div className="flex-center mb-24 flex-wrap gap-16 bg-color-one rounded-8 py-16 px-24 position-relative z-1">
                                            <img
                                                src={offerBg}
                                                alt=""
                                                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1"
                                            />
                                            {
                                                (product?.data?.offers?.name === "Deal Of Day" || product?.data?.offers?.name === "Last Minute Deal") &&
                                                <div className="flex-align gap-16">
                                                    <span className="text-white text-sm">{product?.data?.offers?.name}:</span>
                                                </div>
                                            }

                                            {
                                                (product?.data?.offers?.name === "Deal Of Day" || product?.data?.offers?.name === "Last Minute Deal") &&
                                                <div className="countdown" id="countdown11">
                                                    <ul className="countdown-list flex-align flex-wrap">
                                                        {/* <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                                                        55<span className="days" />
                                                    </li> */}
                                                        <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                                                            {timeLeft.hours}<span className="hours" />
                                                        </li>
                                                        <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                                                            {timeLeft.minutes}<span className="minutes" />
                                                        </li>
                                                        <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                                                            {timeLeft.seconds}<span className="seconds" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            }

                                            <span className="text-white text-sm">
                                                Remains untill the end of the offer
                                            </span>
                                        </div>
                                    }


                                    <h5 className="mb-12">{product?.data?.product_name}</h5>

                                    <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                                    <p className="text-gray-700">
                                        {product?.data?.description}
                                    </p>
                                    {
                                        product?.data?.offers && product?.data?.offers !== "null" ?
                                            <>
                                                <div className="mt-32 flex-align flex-wrap gap-20">
                                                    <h4 className="mb-0"> Special Price :</h4>
                                                    <div style={{ display: "flex", flexDirection: "column" }}>

                                                        {
                                                            product?.data?.discount && product?.data?.discount !== "null" && (Number(product?.data?.price) > Number(product?.data?.final_price)) ?
                                                                <>
                                                                    <span className="text-md text-gray-500" style={{ textDecoration: "line-through" }}>₹ {Number(product?.data?.final_price).toFixed(2)}</span>
                                                                </>
                                                                :
                                                                <></>
                                                        }
                                                        <div className="flex-align gap-8">
                                                            <h5 className="mb-0"> ₹ {Number(product?.data?.offers?.offer_amount).toFixed(2)}</h5>
                                                            / {product?.data?.packaging_size + " " + product?.data?.unit?.unit_symbol}

                                                        </div>
                                                    </div>



                                                </div>
                                                {
                                                    product?.data?.offers && product?.data?.offers !== "null" && (Number(product?.data?.price) > Number(product?.data?.offers?.offer_amount)) &&
                                                    <>
                                                        <div
                                                            className="btn btn-main-two rounded-pill py-10 px-16 text-12 mt-10"
                                                        >
                                                            ₹ {(Number(product?.data?.final_price) - Number(product?.data?.offers?.offer_amount)).toFixed(2)} Off on {product?.data?.product_name}
                                                        </div>
                                                    </>
                                                }
                                            </>
                                            :
                                            <>
                                                <div className="mt-32 flex-align flex-wrap gap-32">
                                                    <h4 className="mb-0">Price :</h4>
                                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                                        {
                                                            (product?.data?.discount && product?.data?.discount !== 0 && product?.data?.discount !== "null" && (Number(product?.data?.price) > Number(product?.data?.final_price))) ?
                                                                <>
                                                                    <span className="text-md text-gray-500" style={{ textDecoration: "line-through" }}>₹ {Number(product?.data?.price).toFixed(2)}</span>
                                                                </>
                                                                :
                                                                <></>
                                                        }
                                                        <div className="flex-align gap-8">
                                                            <h4 className="mb-0"> ₹ {Number(product?.data?.final_price).toFixed(2)}</h4>
                                                            / {product?.data?.packaging_size + " " + product?.data?.unit?.unit_symbol}

                                                        </div>

                                                    </div>





                                                </div>
                                                {
                                                    (product?.data?.discount && product?.data?.discount !== "null" && product?.data?.discount !== 0 && (Number(product?.data?.price) > Number(product?.data?.final_price)) && (product?.data?.offers === null)) ?
                                                        <>
                                                            <div
                                                                className="btn btn-main-two rounded-pill py-10 px-16 text-12 mt-10"
                                                            >
                                                                ₹ {(Number(product?.data?.price) - Number(product?.data?.final_price)).toFixed(2)} Off on {product?.data?.product_name}
                                                            </div>
                                                        </>
                                                        :
                                                        <></>
                                                }
                                            </>


                                    }
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='mt-20'>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            {
                                                product?.data?.cart_quantity > 0 &&
                                                <span style={{ paddingRight: "2rem" }} className="text-gray-900 d-block mt-0 mb-8">Quantity:</span>

                                            }
                                            <div className="flex-between gap-16 flex-wrap">
                                                <div className="flex-align flex-wrap gap-16">
                                                    {
                                                        product?.data?.cart_quantity > 0 &&
                                                        <div className="border border-gray-100 rounded-pill py-9 px-16 flex-align">
                                                            <button onClick={() => addToCart(false)}
                                                                type="button"
                                                                className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"
                                                            >
                                                                <i className="ph ph-minus" />
                                                            </button>
                                                            <input
                                                                type="number"
                                                                className="quantity__input border-0 text-center w-32"
                                                                value={product?.data?.cart_quantity} readOnly
                                                            />
                                                            <button onClick={() => addToCart(true)}
                                                                type="button"
                                                                className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"
                                                            >
                                                                <i className="ph ph-plus" />
                                                            </button>
                                                        </div>
                                                    }

                                                    {
                                                        product?.data?.cart_quantity === 0 &&
                                                        <div
                                                            onClick={() => addToCart(true)}
                                                            className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-48 mt-0"
                                                        >
                                                            {" "}
                                                            <i className="ph ph-shopping-cart" /> Add To Cart
                                                        </div>
                                                    }

                                                </div>

                                            </div>
                                        </div>
                                        <div className="flex-align gap-12 mt-0">
                                            <div
                                                to="#"
                                                className="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle"
                                                onClick={() => addToWishlist()}
                                            >
                                                {
                                                    product?.data?.wishlist ?
                                                        <i className="ph-fill ph-heart" style={{ color: "red" }} />
                                                        :
                                                        <i className="ph-bold ph-heart"></i>



                                                }
                                            </div>
                                            {/* <Link
                                            to="#"
                                            className="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle"
                                        >
                                            <i className="ph ph-shuffle" />
                                        </Link> */}
                                            <Link
                                                to="#"
                                                className="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle"
                                            >
                                                <i className="ph ph-share-network" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product-details__sidebar border border-gray-100 rounded-16 overflow-hidden">

                            <div className="p-24 bg-color-one d-flex align-items-center gap-24 border-bottom border-gray-100">
                                <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                    <i className="ph-fill ph-truck" />
                                </span>
                                <div className="">
                                    <h6 className="text-sm mb-8">Fast Delivery</h6>
                                    {/* <p className="text-gray-700">
                                        Lightning-fast shipping, guaranteed.
                                    </p> */}
                                </div>
                            </div>


                            <div className="p-24 bg-color-one d-flex align-items-center gap-24 border-bottom border-gray-100">
                                <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                    <i className="ph-fill ph-credit-card" />
                                </span>
                                <div className="">
                                    <h6 className="text-sm mb-8">Secure Payment</h6>
                                    {/* <p className="text-gray-700">
                                        Seamless payments with Razorpay. Pay via UPI, credit/debit cards, net banking, or mobile wallets.

                                    </p> */}
                                </div>
                            </div>
                            <div className="p-24 bg-color-one d-flex align-items-center gap-24 border-bottom border-gray-100">
                                <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                    <i className="ph-fill ph-check-circle" />
                                </span>
                                <div className="">
                                    <h6 className="text-sm mb-8">Premium Quality</h6>
                                    {/* <p className="text-gray-700">
                                        Experience top-tier quality products with every order.
                                    </p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Details