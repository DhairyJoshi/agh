import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import SliderImg from '../../assets/images/slider_image.png'
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertiseBanner } from '../../redux/actions/HomeAction';
import { IMAGE } from '../../redux/apis/Api';

export default function AdvertiseBanner() {
    const dispatch = useDispatch()
    const advertisement = useSelector((state) => state?.home?.advertisement)

    useEffect(() => {
        (async () => {
            dispatch(getAdvertiseBanner())
        })()
    }, [])


    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                type="button" onClick={onClick}
                className={` ${className} slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
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
                className={`${className} slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
            >
                <i className="ph ph-caret-left" />
            </button>
        );
    }
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,


    };


    return (
        <div className="banner">
            <div className="container container-lg">
                <div className="banner-item-x rounded-24 overflow-hidden position-relative arrow-center">
                    {/* <a
                        href="#featureSection"
                        className="scroll-down w-84 h-84 text-center flex-center bg-main-600 rounded-circle border border-5 text-white border-white position-absolute start-50 translate-middle-x bottom-0 hover-bg-main-800"
                    >
                        <span className="icon line-height-0">
                            <i className="ph ph-caret-double-down" />
                        </span>
                    </a> */}
                    {/* <img
                        src="/assets/images/bg/banner-bg.png"
                        alt=""
                        className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24"
                    /> */}
                    <div className="flex-align">


                    </div>
                    <div className="banner-slider">
                        <Slider {...settings}>
                            {
                                advertisement && advertisement?.data?.map((data, index) => (

                                    <div key={index} >
                                        <div>
                                            {/* <div className="banner-item__content">
                                                <h1 className="banner-item__title bounce">
                                                    Make Order and Get Express Delivery
                                                </h1>
                                                <Link
                                                    to="/shop"
                                                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                                >
                                                    Explore Shop{" "}
                                                    <span className="icon text-xl d-flex">
                                                        <i className="ph ph-shopping-cart-simple" />{" "}
                                                    </span>
                                                </Link>
                                            </div> */}
                                            {/* <div className="banner-item__thumb"> */}
                                            <img src={IMAGE + data?.advertisement_photo} alt="" />
                                            {/* </div> */}
                                        </div>
                                    </div>
                                ))
                            }

                        </Slider>
                    </div>
                </div>
            </div>
        </div>)
}
