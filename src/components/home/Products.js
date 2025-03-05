import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getHomePageProducts } from '../../redux/actions/ProductAction';
import * as ProductAction from '../../redux/actions/ProductAction';
import { IMAGE } from '../../redux/apis/Api';
import { ROUTES } from '../../constant/routes';
import { bindActionCreators } from 'redux';
import Login from '../login/Login';
import AlertMessage from '../common/AlertMessage';

export default function Products(props) {
    const dispatch = useDispatch()
    const all_products = useSelector((state) => state?.products?.homeProducts)
    const user = JSON.parse(localStorage.getItem('user'))
    const { addtoCart } = bindActionCreators(ProductAction, dispatch)
    const [save, setSave] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const login = JSON.parse(localStorage.getItem('login'))
    const [openLogin, setOpenLogin] = useState(false)
    useEffect(() => {
        dispatch(getHomePageProducts({ user_id: user?.data?.id || null }))
    }, [save, login])


    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                type="button" onClick={onClick}
                className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
            >
                <i className="ph ph-caret-right" />
            </button>
        );
    }
    function SamplePrevArrow(props) {
        const { className, onClick } = props;

        return (

            <button
                type="button"
                onClick={onClick}
                className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
            >
                <i className="ph ph-caret-left" />
            </button>
        );
    }
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 4,

                },
            },
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,

                },
            },
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,

                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,

                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,

                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.5,

                },
            },
            {
                breakpoint: 783,
                settings: {
                    slidesToShow: 2,

                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1.2,

                },
            },
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,

                },
            },

        ],
    };


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
        <>
            {
                all_products?.data?.length ?
                    <section className="new-arrival pb-80 pt-40">
                        <Login open={openLogin} state={setOpenLogin} />
                        <AlertMessage open={isOpen} message={message} state={setIsOpen} />
                        <div className="container container-lg">
                            <div className="section-heading">
                                <div className="flex-between flex-wrap gap-8">
                                    <h5 className="mb-0">Best Selling Products</h5>
                                    {/* <div className="flex-align mr-point gap-16">
                            <Link
                                to="/shop"
                                className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                            >
                                View All Deals
                            </Link>
                        </div> */}
                                </div>
                            </div>
                            <div className="new-arrival__slider arrow-style-two">
                                <Slider {...settings}>
                                    {
                                        all_products && all_products?.data?.map((data, index) => (
                                            <div key={index}>

                                                <div style={{ minHeight: "500px", maxHeight: "500px" }} className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                                    {
                                                        data?.discount && data?.discount !== "null" && Number(data?.price) > Number(data?.final_price) ?
                                                            <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white" style={{ position: "absolute" }}>
                                                                ₹{(Number(data?.price) - Number(data?.final_price)).toFixed(2)} Off
                                                            </span>
                                                            :
                                                            <></>
                                                    }

                                                    <Link
                                                        to={`${ROUTES.productDetails + "/" + data?.slug}`}
                                                        className="product-card__thumb-x flex-center responsive-img-width"
                                                        style={{ margin: "auto" }}
                                                    >
                                                        <img src={IMAGE + data?.image} alt={data?.product_name} className=' responsive-img-slider' />
                                                    </Link>

                                                    <div className="product-card__content mt-12" style={{ width: "100%" }}>


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
                                                            {data?.description?.length <= 35 ? data?.description : data?.description?.substring(0, 35) + "..."}
                                                        </p>
                                                        <div className="flex-between gap-8 mt-24 flex-wrap" style={{ display: "flex", justifyContent: "space-between" }}>
                                                            <div className="product-card__price">
                                                                <span className="text-gray-500 fw-normal">Price : </span>{" "}
                                                                {
                                                                    data?.discount && data?.discount !== "null" && Number(data?.price) > Number(data?.final_price) ?
                                                                        <>< span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                                            ₹{data?.price}{" "}
                                                                        </span><br /></>
                                                                        :
                                                                        <></>

                                                                }

                                                                <span className="text-heading text-md fw-semibold ">
                                                                    ₹{data?.final_price}{" "}
                                                                </span>
                                                            </div>

                                                            {
                                                                data?.cart_quantity === 0 || !data?.cart_quantity ?
                                                                    <div
                                                                        to="/cart"
                                                                        className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                                                                        onClick={() => addToCart(data, true)}

                                                                    >
                                                                        Add <i className="ph ph-shopping-cart" />
                                                                    </div>
                                                                    :

                                                                    <div className="border border-gray-100 rounded-pill py-9 px-16 flex-align">
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => addToCart(data, false)}

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
                                                                            onClick={() => addToCart(data, true)}

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
                                            </div>

                                        ))
                                    }



                                </Slider>
                            </div>
                        </div>
                    </section>
                    :
                    <></>
            }
        </>

    )
}
