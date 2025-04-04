import React, { memo, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/index';

const SampleNextArrow = memo((props) => {
    const { className, onClick } = props;
    return (
        <button
            type="button" onClick={onClick}
            className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
        >
            <i className="ph ph-caret-right" />
        </button>
    );
});

const SamplePrevArrow = memo((props) => {
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
});


const ProductBanner = () => {
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

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                },
            },

        ],
    };

    return (
        <section className="hot-deals pt-80">
            <div className="container container-lg">
                <div className="section-heading">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-8">
                        <h3 className="mb-0">New Arrivals</h3>
                        <div className="flex-align mr-point gap-16">
                            <Link
                                to="/products"
                                className="mt-3 text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                            >
                                View All Products
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row g-12">
                    <div className="col-md-4">
                        <div className="hot-deals position-relative rounded-16 bg-main-600 overflow-hidden z-1 text-center h-100 d-flex flex-col justify-content-center align-items-center" style={{ padding: '25px 0px' }}>
                            {/* <img
                                src="assets/images/shape/offer-shape.png"
                                alt=""
                                className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6"
                            />
                            <div className="hot-deals__thumb">
                                <img src="assets/images/thumbs/hot-deals-img.png" alt="" />
                            </div> */}
                            <div className="py-xl-4">
                                <h4 className="text-white mb-8 mx-16">All you need for agriculture & hard work</h4>
                                <div className="text-white m-16">
                                    AGH offers diverse crop nourishment products for all your agricultural needs
                                </div>
                                <Link
                                    to="/products"
                                    className="mt-16 btn btn-main-two fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                                    tabIndex={0}
                                >
                                    View Products
                                    <span className="icon text-xl d-flex">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="hot-deals-slider arrow-style-two">
                            <Slider {...settings}>

                                {
                                    products.map((product, index) => (
                                        <div key={ product._id || index } >
                                            <div style={{ height: '26rem', overflow: 'hidden', padding: '10px' }} className="d-flex justify-content-between flex-column border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
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
                                                        {/* <div className="product-card__price mb-8">
                                                            <span className="text-heading text-md fw-semibold ">
                                                                &#8377;{ product.price }
                                                            </span>
                                                        </div> */}
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
                </div>
            </div>
        </section>

    )
}

export default ProductBanner