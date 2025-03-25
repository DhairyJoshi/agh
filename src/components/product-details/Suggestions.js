import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/index';

const Suggestions = () => {
    const dispatch = useDispatch();
    const { GET_ALL_PRODUCTS } = bindActionCreators(actionCreators, dispatch);
    const products = useSelector(state => state.productReducer.products);

    const fetchProducts = useCallback(() => {
        GET_ALL_PRODUCTS();
    }, [GET_ALL_PRODUCTS]);

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [products, dispatch, fetchProducts]);

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
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 6,

                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,

                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,

                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,

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
    return (
        <section className="new-arrival py-80">
            <div className="container container-lg">
                <div className="section-heading">
                    <div className="flex-between flex-wrap gap-8">
                        <h5 className="mb-0">Similar Products</h5>
                    </div>
                </div>
                <div className="new-arrival__slider arrow-style-two">
                    <Slider {...settings}>
                        {
                            products.map((product, index) => (
                                <div key={product._id || index}>
                                    <div style={{ height: '24rem', overflow: 'hidden' }} className="d-flex justify-content-between flex-column border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                        <Link
                                            to={`/product-details/${product.id}`}
                                            style={{
                                                width: 'auto',
                                                height: '60%',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <img src={`https://api.farmerconnects.com${product.image_1}`} alt="prod_image"
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: 'center'
                                                }}
                                            />
                                        </Link>
                                        <div className="product-card__content p-sm-2">
                                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                                <Link to="/product-details" className="link text-line-2">
                                                    {product.product_name}
                                                </Link>
                                            </h6>
                                            <div className="flex-align gap-4">
                                                <span className="text-main-600 text-md d-flex">
                                                    <i className="ph-fill ph-storefront" />
                                                </span>
                                                <span className="text-gray-500 text-xs">
                                                    By {product.category_id.category_name}
                                                </span>
                                            </div>
                                            <div className="product-card__content mt-12">
                                                <Link
                                                    to={`/inquiry/${product.id}`}
                                                    className="product-card__cart w-100 btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white px-24 rounded-8 flex-center gap-8 fw-medium"
                                                    tabIndex={0}
                                                >
                                                    Inquire<i className="ph ph-whatsapp-logo fs-4" />
                                                </Link>
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

    )
}

export default Suggestions