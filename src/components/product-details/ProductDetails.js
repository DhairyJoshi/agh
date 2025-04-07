import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/index'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { GET_ALL_PRODUCTS } = bindActionCreators(actionCreators, dispatch);
    const products = useSelector((state) => state.productReducer.products);

    const fetchProducts = useCallback(() => {
        GET_ALL_PRODUCTS();
    }, [GET_ALL_PRODUCTS]);

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [products, dispatch, fetchProducts]);

    const product = products?.find((p) => p.id === parseInt(id));

    const productImages = [
        `https://api.farmerconnects.com${product.image_0}`,
        `https://api.farmerconnects.com${product.image_1}`,
        `https://api.farmerconnects.com${product.image_2}`,
    ];

    const settingsThumbs = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
    };
    return (
        <section className="product-details pt-20 pb-40">
            <div className="container container-lg">
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <div className="row gy-4">
                        <div>
                            <div className="row gy-4">
                                <div className="col-xl-6">
                                    <div className="product-details__left">
                                        <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                                            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                                <img 
                                                style={{ 
                                                    height: '100%',
                                                    width: 'auto',
                                                    objectFit: 'fill',
                                                    objectPosition: 'center'
                                                }}
                                                src={ `https://api.farmerconnects.com${product.image_0}` } alt="Main Product" />
                                            </div>
                                        </div>
                                        <div className="mt-24">
                                            <div className="product-details__images-slider">
                                                <Slider {...settingsThumbs}>
                                                    {productImages.map((image, index) => (
                                                        <div className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8" key={index}>
                                                            <img className='thum' src={image} alt={`Thumbnail ${index}`} />
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="product-details__content">
                                        <h5 className="mb-12">
                                            { product.product_name }
                                        </h5>
                                        <p className="text-gray-700">
                                            { product.description }
                                        </p>
                                        {/* <div className="my-32 flex-align gap-16 flex-wrap">
                                            <div className="flex-align gap-8">
                                                <h6 className="mb-0">INR { product.price }</h6>
                                            </div>
                                        </div> */}
                                        <div className="my-32 flex-align flex-wrap gap-12">
                                                <div
                                                    className="px-12 py-8 text-sm rounded-8 flex-align gap-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                                                >
                                                    { product.category_id }
                                                </div>
                                        </div>
                                        {/* <div className="my-32 flex-align flex-wrap gap-12">
                                            {product.tags.map((tag, index) => (
                                                <div
                                                    key={index}
                                                    className="px-12 py-8 text-sm rounded-8 flex-align gap-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                                                >
                                                    {tag}
                                                </div>
                                            ))}
                                        </div> */}

                                        <Link
                                            to={`/inquiry/${product.id}`}
                                            className="btn btn-black flex-center gap-8 rounded-8 py-16"
                                        >
                                            <i className="ph ph-info fs-3" />
                                            Request More Information
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                
                {/* <div className="pt-40">
                    <div className="product-dContent border rounded-24">
                        <div className="product-dContent__box">
                            <div className="tab-content" id="pills-tabContent">
                                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-description"
                                        role="tabpanel"
                                        aria-labelledby="pills-description-tab"
                                        tabIndex={0}
                                    >
                                        <div className="mb-40">
                                            <h6 className="mb-12">Product Description</h6>
                                            <p>
                                                { product.description }
                                            </p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>

    )
}

export default ProductDetails