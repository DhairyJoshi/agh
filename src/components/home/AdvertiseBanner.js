import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import bannerBg1 from '../../assets/images/banner_bg1.jpg';
import bannerBg2 from '../../assets/images/banner_bg2.jpg';


export default function AdvertiseBanner() {
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
        <div className="banner" style={{marginTop: '0px'}}>
            <div>
                <div className="banner-item-x overflow-hidden position-relative arrow-center">
                    <div className="banner-slider">
                        <Slider {...settings}>
                            <div>
                                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                                    <div className="banner-item__content" style={{
                                        position: 'absolute',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        width: '100%',
                                        height: '100%',
                                        zIndex: 2
                                    }}>
                                        <h1 className="banner-item__title bounce mx-auto text-center" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                            Discover Our New Arrivals
                                        </h1>
                                        <Link
                                            to="/shop"
                                            className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                        >
                                            Shop Now{" "}
                                            <span className="icon text-xl d-flex">
                                                <i className="ph ph-shopping-cart-simple" />{" "}
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="banner-item__thumb" style={{ height: '85vh', width: '100%' }}>
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '85vh',
                                                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bannerBg1})`,
                                                backgroundSize: 'cover', 
                                                backgroundPosition: 'bottom',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                                    <div className="banner-item__content" style={{
                                        position: 'absolute',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        width: '100%',
                                        height: '100%',
                                        zIndex: 2
                                    }}>
                                        <h1 className="banner-item__title bounce mx-auto text-center" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                            Discover Our New Arrivals
                                        </h1>
                                        <Link
                                            to="/shop"
                                            className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                        >
                                            Shop Now{" "}
                                            <span className="icon text-xl d-flex">
                                                <i className="ph ph-shopping-cart-simple" />{" "}
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="banner-item__thumb" style={{ height: '85vh', width: '100%' }}>
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '85vh',
                                                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bannerBg2})`,
                                                backgroundSize: 'cover', 
                                                backgroundPosition: 'bottom',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </Slider>

                    </div>
                </div>
            </div>
        </div>)
}
