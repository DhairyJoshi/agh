import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/index'

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
                                            src={ `https://api.farmerconnects.com${product.image_1}` } alt="Main Product" />
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
                                                { product.category_id.category_name }
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
                <div className="pt-40">
                    <div className="product-dContent border rounded-24">
                        <div className="product-dContent__box">
                            <div className="tab-content" id="pills-tabContent">
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
                                        <ul className="list-inside mt-32 ms-16">
                                            <li className="text-gray-400 mb-4">
                                                8.0 oz. bag of LAY'S Classic Potato Chips
                                            </li>
                                            <li className="text-gray-400 mb-4">
                                                Tasty LAY's potato chips are a great snack
                                            </li>
                                            <li className="text-gray-400 mb-4">
                                                Includes three ingredients: potatoes, oil, and salt
                                            </li>
                                            <li className="text-gray-400 mb-4">Gluten free product</li>
                                        </ul>
                                        <ul className="mt-32">
                                            <li className="text-gray-400 mb-4">Made in USA</li>
                                            <li className="text-gray-400 mb-4">Ready To Eat.</li>
                                        </ul>
                                    </div>
                                    <div className="mb-40">
                                        <h6 className="mb-24">Product Specifications</h6>
                                        <ul className="mt-32">
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Product Type:
                                                    <span className="text-gray-500"> Chips &amp; Dips</span>
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Product Name:
                                                    <span className="text-gray-500">
                                                        {" "}
                                                        Potato Chips Classic{" "}
                                                    </span>
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Brand:
                                                    <span className="text-gray-500"> Lay's</span>
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    FSA Eligible:
                                                    <span className="text-gray-500"> No</span>
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Size/Count:
                                                    <span className="text-gray-500"> 8.0oz</span>
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Item Code:
                                                    <span className="text-gray-500"> 331539</span>
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Ingredients:
                                                    <span className="text-gray-500">
                                                        {" "}
                                                        Potatoes, Vegetable Oil, and Salt.
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mb-40">
                                        <h6 className="mb-24">Nutrition Facts</h6>
                                        <ul className="mt-32">
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    {" "}
                                                    Total Fat 10g 13%
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    {" "}
                                                    Saturated Fat 1.5g 7%
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    {" "}
                                                    Cholesterol 0mg 0%
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    {" "}
                                                    Sodium 170mg 7%
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    {" "}
                                                    Potassium 350mg 6%
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mb-0">
                                        <h6 className="mb-24">More Details</h6>
                                        <ul className="mt-32">
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-gray-500">
                                                    {" "}
                                                    Lunarlon midsole delivers ultra-plush responsiveness
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-gray-500">
                                                    {" "}
                                                    Encapsulated Air-Sole heel unit for lightweight cushioning
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-gray-500">
                                                    {" "}
                                                    Colour Shown: Ale Brown/Black/Goldtone/Ale Brown
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-gray-500"> Style: 805899-202</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-reviews"
                                    role="tabpanel"
                                    aria-labelledby="pills-reviews-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <h6 className="mb-24">Product Description</h6>
                                            <div className="d-flex align-items-start gap-24 pb-44 border-bottom border-gray-100 mb-44">
                                                <img
                                                    src="assets/images/thumbs/comment-img1.png"
                                                    alt=""
                                                    className="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
                                                />
                                                <div className="flex-grow-1">
                                                    <div className="flex-between align-items-start gap-8 ">
                                                        <div className="">
                                                            <h6 className="mb-12 text-md">Nicolas cage</h6>
                                                            <div className="flex-align gap-8">
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className="text-gray-800 text-xs">
                                                            3 Days ago
                                                        </span>
                                                    </div>
                                                    <h6 className="mb-14 text-md mt-24">Greate Product</h6>
                                                    <p className="text-gray-700">
                                                        There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in
                                                        some form, by injected humour
                                                    </p>
                                                    <div className="flex-align gap-20 mt-44">
                                                        <button className="flex-align gap-12 text-gray-700 hover-text-main-600">
                                                            <i className="ph-bold ph-thumbs-up" />
                                                            Like
                                                        </button>
                                                        <Link
                                                            to="#comment-form"
                                                            className="flex-align gap-12 text-gray-700 hover-text-main-600"
                                                        >
                                                            <i className="ph-bold ph-arrow-bend-up-left" />
                                                            Replay
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-start gap-24">
                                                <img
                                                    src="assets/images/thumbs/comment-img1.png"
                                                    alt=""
                                                    className="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
                                                />
                                                <div className="flex-grow-1">
                                                    <div className="flex-between align-items-start gap-8 ">
                                                        <div className="">
                                                            <h6 className="mb-12 text-md">Nicolas cage</h6>
                                                            <div className="flex-align gap-8">
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className="text-gray-800 text-xs">
                                                            3 Days ago
                                                        </span>
                                                    </div>
                                                    <h6 className="mb-14 text-md mt-24">Greate Product</h6>
                                                    <p className="text-gray-700">
                                                        There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in
                                                        some form, by injected humour
                                                    </p>
                                                    <div className="flex-align gap-20 mt-44">
                                                        <button className="flex-align gap-12 text-gray-700 hover-text-main-600">
                                                            <i className="ph-bold ph-thumbs-up" />
                                                            Like
                                                        </button>
                                                        <Link
                                                            to="#comment-form"
                                                            className="flex-align gap-12 text-gray-700 hover-text-main-600"
                                                        >
                                                            <i className="ph-bold ph-arrow-bend-up-left" />
                                                            Replay
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-56">
                                                <div className="">
                                                    <h6 className="mb-24">Write a Review</h6>
                                                    <span className="text-heading mb-8">
                                                        What is it like to Product?
                                                    </span>
                                                    <div className="flex-align gap-8">
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mt-32">
                                                    <form action="#">
                                                        <div className="mb-32">
                                                            <label
                                                                htmlFor="title"
                                                                className="text-neutral-600 mb-8"
                                                            >
                                                                Review Title
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="common-input rounded-8"
                                                                id="title"
                                                                placeholder="Great Products"
                                                            />
                                                        </div>
                                                        <div className="mb-32">
                                                            <label
                                                                htmlFor="desc"
                                                                className="text-neutral-600 mb-8"
                                                            >
                                                                Review Content
                                                            </label>
                                                            <textarea
                                                                className="common-input rounded-8"
                                                                id="desc"
                                                                defaultValue={
                                                                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                                                                }
                                                            />
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-main rounded-pill mt-48"
                                                        >
                                                            Submit Review
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="ms-xxl-5">
                                                <h6 className="mb-24">Customers Feedback</h6>
                                                <div className="d-flex flex-wrap gap-44">
                                                    <div className="border border-gray-100 rounded-8 px-40 py-52 flex-center flex-column flex-shrink-0 text-center">
                                                        <h2 className="mb-6 text-main-600">4.8</h2>
                                                        <div className="flex-center gap-8">
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                        </div>
                                                        <span className="mt-16 text-gray-500">
                                                            Average Product Rating
                                                        </span>
                                                    </div>
                                                    <div className="border border-gray-100 rounded-8 px-24 py-40 flex-grow-1">
                                                        <div className="flex-align gap-8 mb-20">
                                                            <span className="text-gray-900 flex-shrink-0">5</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={70}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "70%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">
                                                                124
                                                            </span>
                                                        </div>
                                                        <div className="flex-align gap-8 mb-20">
                                                            <span className="text-gray-900 flex-shrink-0">4</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "50%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">
                                                                52
                                                            </span>
                                                        </div>
                                                        <div className="flex-align gap-8 mb-20">
                                                            <span className="text-gray-900 flex-shrink-0">3</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={35}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "35%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">
                                                                12
                                                            </span>
                                                        </div>
                                                        <div className="flex-align gap-8 mb-20">
                                                            <span className="text-gray-900 flex-shrink-0">2</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={20}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "20%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">5</span>
                                                        </div>
                                                        <div className="flex-align gap-8 mb-0">
                                                            <span className="text-gray-900 flex-shrink-0">1</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={5}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "5%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">2</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductDetails