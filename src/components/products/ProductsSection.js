import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ProductsCard from './ProductsCard'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../redux/index'

const ProductsSection = () => {

    const dispatch = useDispatch();
    const { GET_ALL_PRODUCTS } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        GET_ALL_PRODUCTS();
    }, []);

    const products = useSelector(state => state.productState.products);

    let [grid, setGrid] = useState(false);
    let [active, setActive] = useState(false);

    let sidebarController = () => {
        setActive(!active);
    };

    const productCategories = [
        "Organic Fertilizers",
        "Synthetic Fertilizers",
        "Slow-Release & Controlled-Release Fertilizers",
        "Liquid Fertilizers",
        "Biofertilizers",
        "Specialty Fertilizers",
        "Micronutrient Fertilizers",
    ];

    const productsstatic = [
        { image: '/assets/images/productImages/prod1_1.png', name: 'Organic Compost', rating: 4.8, price: 1500, bestsale: false, sale: false, salePercent: 0, new: true },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Garden Soil', rating: 4.5, price: 1200, bestsale: false, sale: true, salePercent: 20, new: false },
        { image: '/assets/images/productImages/prod2_1.png', name: 'Mulch', rating: 4.7, price: 800, bestsale: false, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Vermicompost', rating: 4.6, price: 1800, bestsale: false, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod2_1.png', name: 'Bone Meal', rating: 4.4, price: 1600, bestsale: false, sale: true, salePercent: 15, new: false },
        { image: '/assets/images/productImages/prod3_1.png', name: 'Fish Emulsion', rating: 4.7, price: 2000, bestsale: true, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod3_1.png', name: 'Seaweed Extract', rating: 4.5, price: 2200, bestsale: false, sale: true, salePercent: 25, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Cow Manure', rating: 4.2, price: 900, bestsale: false, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Poultry Manure', rating: 4.3, price: 950, bestsale: false, sale: false, salePercent: 0, new: true },
        { image: '/assets/images/productImages/prod2_1.png', name: 'Urea Fertilizer', rating: 4.6, price: 1300, bestsale: false, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod3_1.png', name: 'Ammonium Nitrate', rating: 4.5, price: 1400, bestsale: false, sale: true, salePercent: 10, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Superphosphate', rating: 4.3, price: 1250, bestsale: false, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Diammonium Phosphate', rating: 4.4, price: 1700, bestsale: true, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod3_1.png', name: 'Potassium Sulfate', rating: 4.5, price: 1450, bestsale: false, sale: true, salePercent: 18, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'NPK 20-20-20', rating: 4.6, price: 1550, bestsale: false, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Polymer-Coated Urea', rating: 4.8, price: 2300, bestsale: false, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Slow-Release Fertilizer', rating: 4.5, price: 1800, bestsale: false, sale: true, salePercent: 12, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Liquid NPK Fertilizer', rating: 4.7, price: 1900, bestsale: false, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Foliar Spray Fertilizer', rating: 4.6, price: 1700, bestsale: false, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Micronutrient Fertilizer', rating: 4.4, price: 1600, bestsale: false, sale: true, salePercent: 20, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Rhizobium Biofertilizer', rating: 4.5, price: 2000, bestsale: false, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Mycorrhizal Fungi Fertilizer', rating: 4.6, price: 1950, bestsale: false, sale: true, salePercent: 22, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Phosphate-Solubilizing Bacteria', rating: 4.3, price: 1700, bestsale: false, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Lawn Fertilizer', rating: 4.7, price: 1850, bestsale: false, sale: false, salePercent: 0, new: false },
        { image: '/assets/images/productImages/prod1_1.png', name: 'Vegetable & Fruit Fertilizer', rating: 4.6, price: 1750, bestsale: false, sale: true, salePercent: 20, new: false }
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
                                />
                            ))}

                        </div>
                        {/* Pagination Start */}
                        {/* <ul className="pagination flex-center flex-wrap gap-16">
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
                        </ul> */}
                        {/* Pagination End */}
                    </div>
                    {/* Content End */}
                </div>
            </div>
        </section>

    )
}

export default ProductsSection