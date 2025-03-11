import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactSlider from 'react-slider'
import ProductsCard from './ProductsCard'

const ProductsSection = () => {

    let [grid, setGrid] = useState(false)

    let [active, setActive] = useState(false)
    let sidebarController = () => {
        setActive(!active)
    }

    const productCategories = [
        "Organic Fertilizers",
        "Synthetic Fertilizers",
        "Slow-Release & Controlled-Release Fertilizers",
        "Liquid Fertilizers",
        "Biofertilizers",
        "Specialty Fertilizers",
        "Micronutrient Fertilizers",
    ];

    const products = [
        { name: 'Organic Compost', rating: 4.8, price: 1500, bestsale: false, sale: false, salePercent: 0, new: true },
        { name: 'Garden Soil', rating: 4.5, price: 1200, bestsale: false, sale: true, salePercent: 20, new: false },
        { name: 'Mulch', rating: 4.7, price: 800, bestsale: false, sale: false, salePercent: 0, new: false },
        { name: 'Vermicompost', rating: 4.6, price: 1800, bestsale: false, sale: false, salePercent: 0, new: false },
        { name: 'Bone Meal', rating: 4.4, price: 1600, bestsale: false, sale: true, salePercent: 15, new: false },
        { name: 'Fish Emulsion', rating: 4.7, price: 2000, bestsale: true, sale: false, salePercent: 0, new: false },
        { name: 'Seaweed Extract', rating: 4.5, price: 2200, bestsale: false, sale: true, salePercent: 25, new: false },
        { name: 'Cow Manure', rating: 4.2, price: 900, bestsale: false, sale: false, salePercent: 0, new: false },
        { name: 'Poultry Manure', rating: 4.3, price: 950, bestsale: false, sale: false, salePercent: 0, new: true },
        { name: 'Urea Fertilizer', rating: 4.6, price: 1300, bestsale: false, sale: false, salePercent: 0, new: false },
        { name: 'Ammonium Nitrate', rating: 4.5, price: 1400, bestsale: false, sale: true, salePercent: 10, new: false },
        { name: 'Superphosphate', rating: 4.3, price: 1250, bestsale: false, sale: false, salePercent: 0, new: false },
        { name: 'Diammonium Phosphate', rating: 4.4, price: 1700, bestsale: true, sale: false, salePercent: 0, new: false },
        { name: 'Potassium Sulfate', rating: 4.5, price: 1450, bestsale: false, sale: true, salePercent: 18, new: false },
        { name: 'NPK 20-20-20', rating: 4.6, price: 1550, bestsale: false, sale: false, salePercent: 0, new: false },
        { name: 'Polymer-Coated Urea', rating: 4.8, price: 2300, bestsale: false, sale: false, salePercent: 0, new: false },
        { name: 'Slow-Release Fertilizer', rating: 4.5, price: 1800, bestsale: false, sale: true, salePercent: 12, new: false },
        { name: 'Liquid NPK Fertilizer', rating: 4.7, price: 1900, bestsale: false, sale: false, salePercent: 0, new: false },
        { name: 'Foliar Spray Fertilizer', rating: 4.6, price: 1700, bestsale: false, sale: false, salePercent: 0, new: false },
        { name: 'Micronutrient Fertilizer', rating: 4.4, price: 1600, bestsale: false, sale: true, salePercent: 20, new: false },
        { name: 'Rhizobium Biofertilizer', rating: 4.5, price: 2000, bestsale: false, sale: false, salePercent: 0, new: false },
        { name: 'Mycorrhizal Fungi Fertilizer', rating: 4.6, price: 1950, bestsale: false, sale: true, salePercent: 22, new: false },
        { name: 'Phosphate-Solubilizing Bacteria', rating: 4.3, price: 1700, bestsale: false, sale: false, salePercent: 0, new: false },
        { name: 'Lawn Fertilizer', rating: 4.7, price: 1850, bestsale: false, sale: false, salePercent: 0, new: false },
        { name: 'Vegetable & Fruit Fertilizer', rating: 4.6, price: 1750, bestsale: false, sale: true, salePercent: 20, new: false }
    ];

    return (
        <section className="shop pt-20 pb-80">
            <div className={`side-overlay ${active && "show"}`}></div>
            <div className="container container-lg">
                <div className="row">
                    {/* Sidebar Start */}
                    <div className="col-lg-3">
                        <div className={`shop-sidebar ${active && "active"}`}>
                            <button onClick={sidebarController}
                                type="button"
                                className="shop-sidebar__close d-lg-none d-flex w-32 h-32 flex-center border border-gray-100 rounded-circle hover-bg-main-600 position-absolute inset-inline-end-0 me-10 mt-8 hover-text-white hover-border-main-600"
                            >
                                <i className="ph ph-x" />
                            </button>
                            <div className="shop-sidebar__box border border-gray-100 rounded-8 px-32 py-16 mb-20">
                                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                                    Product Category
                                </h6>
                                <ul className="max-h-540 overflow-y-auto scroll-sm">
                                    {productCategories.map((category, index) => (
                                        <li key={index} className="mb-24">
                                            <Link to="/product-details" className="text-gray-900 hover-text-main-600">
                                                {category} (12)
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                                    Filter by Price
                                </h6>
                                <div className="custom--range">
                                    <ReactSlider
                                        className="horizontal-slider"
                                        thumbClassName="example-thumb"
                                        trackClassName="example-track"
                                        defaultValue={[0, 100]}
                                        ariaLabel={['Lower thumb', 'Upper thumb']}
                                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                        renderThumb={(props, state) => {
                                            const { key, ...restProps } = props;
                                            return <div {...restProps} key={state.index}>{state.valueNow}</div>;
                                        }}
                                        pearling
                                        minDistance={10}
                                    />

                                    <br />
                                    <br />
                                    <div className="flex-between flex-wrap-reverse gap-8 mt-24 ">
                                        <button type="button" className="btn btn-main h-40 flex-align">
                                            Filter{" "}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                                    Filter by Rating
                                </h6>
                                <div className="flex-align gap-8 position-relative mb-20">
                                    <label
                                        className="position-absolute w-100 h-100 cursor-pointer"
                                        htmlFor="rating5"
                                    >
                                        {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="rating5"
                                        />
                                    </div>
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
                                    <span className="text-gray-900 flex-shrink-0">124</span>
                                </div>
                                <div className="flex-align gap-8 position-relative mb-20">
                                    <label
                                        className="position-absolute w-100 h-100 cursor-pointer"
                                        htmlFor="rating4"
                                    >
                                        {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="rating4"
                                        />
                                    </div>
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
                                    <span className="text-gray-900 flex-shrink-0">52</span>
                                </div>
                                <div className="flex-align gap-8 position-relative mb-20">
                                    <label
                                        className="position-absolute w-100 h-100 cursor-pointer"
                                        htmlFor="rating3"
                                    >
                                        {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="rating3"
                                        />
                                    </div>
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
                                    <span className="text-gray-900 flex-shrink-0">12</span>
                                </div>
                                <div className="flex-align gap-8 position-relative mb-20">
                                    <label
                                        className="position-absolute w-100 h-100 cursor-pointer"
                                        htmlFor="rating2"
                                    >
                                        {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="rating2"
                                        />
                                    </div>
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
                                <div className="flex-align gap-8 position-relative mb-0">
                                    <label
                                        className="position-absolute w-100 h-100 cursor-pointer"
                                        htmlFor="rating1"
                                    >
                                        {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="rating1"
                                        />
                                    </div>
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
                    {/* Sidebar End */}
                    {/* Content Start */}
                    <div className="col-lg-9">
                        {/* Top Start */}
                        <div className="flex-between gap-16 flex-wrap mb-40 ">
                            <span className="text-gray-900">Showing 1-20 of 85 result</span>
                            <div className="position-relative flex-align gap-16 flex-wrap">
                                <div className="list-grid-btns flex-align gap-16">
                                    <button onClick={() => setGrid(true)}
                                        type="button"
                                        className={`w-44 h-44 flex-center border rounded-6 text-2xl list-btn border-gray-100 ${grid === true && "border-main-600 text-white bg-main-600"}`}
                                    >
                                        <i className="ph-bold ph-list-dashes" />
                                    </button>
                                    <button onClick={() => setGrid(false)}
                                        type="button"
                                        className={`w-44 h-44 flex-center border rounded-6 text-2xl grid-btn border-gray-100 ${grid === false && "border-main-600 text-white bg-main-600"}`}
                                    >
                                        <i className="ph ph-squares-four" />
                                    </button>
                                </div>
                                <div className="position-relative text-gray-500 flex-align gap-4 text-14">
                                    <label htmlFor="sorting" className="text-inherit flex-shrink-0">
                                        Sort by:{" "}
                                    </label>
                                    <select defaultValue={1}
                                        className="form-control common-input px-14 py-14 text-inherit rounded-6 w-auto"
                                        id="sorting"
                                    >
                                        <option value={1} >
                                            Popular
                                        </option>
                                        <option value={1}>Latest</option>
                                        <option value={1}>Trending</option>
                                        <option value={1}>Matches</option>
                                    </select>
                                </div>
                                <button onClick={sidebarController}
                                    type="button"
                                    className="w-44 h-44 d-lg-none d-flex flex-center border border-gray-100 rounded-6 text-2xl sidebar-btn"
                                >
                                    <i className="ph-bold ph-funnel" />
                                </button>
                            </div>
                        </div>
                        {/* Top End */}
                        <div className={`list-grid-wrapper ${grid && "list-view"}`}>
                            
                            {products.map((product, index) => (
                                <ProductsCard 
                                    key = { index }
                                    product = { product }
                                    name = { product.name } 
                                    rating = { product.rating } 
                                    price = { product.price } 
                                    bestsale = { product.bestsale } 
                                    sale = { product.sale }
                                    salePercent = { product.salePercent }
                                    prodNew = { product.new }
                                />
                            ))}

                        </div>
                        {/* Pagination Start */}
                        <ul className="pagination flex-center flex-wrap gap-16">
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    <i className="ph-bold ph-arrow-left" />
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    01
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    02
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    03
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    04
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    05
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    06
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    07
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    <i className="ph-bold ph-arrow-right" />
                                </Link>
                            </li>
                        </ul>
                        {/* Pagination End */}
                    </div>
                    {/* Content End */}
                </div>
            </div>
        </section>

    )
}

export default ProductsSection