import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import bannerBg1 from '../../assets/images/banner_bg1.jpg';
import bannerBg2 from '../../assets/images/banner_bg2.jpg';


export default function AdvertiseBanner() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveSlide(0);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

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
        infinite: true,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (_, next) => {
            setActiveSlide(next);
        },
    };


    return (
        <div className="banner" style={{ marginTop: '0px' }}>
            <div>
                <div className="banner-item-x overflow-hidden position-relative arrow-center">
                    <div className="banner-slider">
                        <Slider {...settings}>
                            {[bannerBg1, bannerBg2].map((bg, index) => (

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
                                            zIndex: 2,
                                            opacity: activeSlide === index ? 1 : 0,
                                            transform: activeSlide === index ? 'translateY(0)' : 'translateY(30px)',
                                            transition: 'opacity 1s ease, transform 1s ease'
                                        }}>
                                            <h1 className="banner-item__title bounce mx-auto text-center" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                                Discover Our New Arrivals
                                            </h1>
                                            <Link
                                                to="/shop" style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    color: '#fff',
                                                    padding: '10px 20px',
                                                    borderRadius: '30px',
                                                    textDecoration: 'none',
                                                    fontSize: '1rem',
                                                    opacity: activeSlide === index ? 1 : 0,
                                                    transform: activeSlide === index ? 'translateY(0)' : 'translateY(30px)',
                                                    transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s'
                                                }}
                                                className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                            >
                                                View Products{" "}
                                                <span className="icon text-xl d-flex">
                                                    <i className="ph ph-shopping-cart-simple" />{" "}
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="banner-item__thumb" style={{ height: '90vh', width: '100%' }}>
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '90vh',
                                                    background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bg})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'bottom',
                                                    backgroundRepeat: 'no-repeat',
                                                    opacity: activeSlide === index ? 1 : 0,
                                                    transition: 'opacity 1.5s ease'
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </Slider>
                        <style>
                            {`
                                @keyframes fadeIn {
                                    from { opacity: 0; }
                                    to { opacity: 1; }
                                }
                                @keyframes fadeInUp {
                                    from { opacity: 0; transform: translateY(30px); }
                                    to { opacity: 1; transform: translateY(0); }
                                }
                            `}
                        </style>
                    </div>
                </div>
            </div>
        </div>)
}
