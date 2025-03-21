import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsCard from './ProductsCard';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/index';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const ProductsSection = () => {
    const dispatch = useDispatch();
    const { GET_ALL_PRODUCTS } = bindActionCreators(actionCreators, dispatch);
    const products = useSelector((state) => state.productReducer.products);
    // const [data, setData] = useState();

    const fetchProducts = useCallback(() => {
        GET_ALL_PRODUCTS();
    }, [GET_ALL_PRODUCTS]);

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [products, dispatch, fetchProducts]);

    // useEffect(() => {
    //     const getProduct = async() => {
    //         const resData = await GET_ALL_PRODUCTS();
    //         if(resData?.statuscode === 200){
    //             setData(resData?.data)
    //         }
    //     }
    //     getProduct();
    // },[]);
    // console.log(data,"data")

    const [grid, setGrid] = useState(false);
    const [active, setActive] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const sidebarController = () => {
        setActive(!active);
    };

    const productCategories = {};
    products.forEach((product) => {
        if (!productCategories[product.category_id.category_name]) {
            productCategories[product.category_id.category_name] = [];
        }
        productCategories[product.category_id.category_name].push(product);
    });

    // Filter products based on the selected category
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category_id.category_name === selectedCategory)
        : products;

    return (
        <section className="shop pt-20 pb-80">
            <div className={`side-overlay ${active && "show"}`}></div>
            <div className="container container-lg">
                <div className="row">
                    {/* Sidebar Start */}
                    <div className="col-lg-3">
                        <div className={`shop-sidebar ${active && "active"}`}>
                            <button
                                onClick={sidebarController}
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
                                    <li className="mb-12">
                                        <button
                                            style={{
                                                width: "100%",
                                                textAlign: "left",
                                                padding: "8px 12px",
                                                borderRadius: "4px",
                                                backgroundColor: selectedCategory === null ? "#299E60" : "transparent",
                                                color: selectedCategory === null ? "white" : "#111827",
                                                transition: "background-color 0.2s ease",
                                            }}
                                            onClick={() => setSelectedCategory(null)}
                                        >
                                            All Products ({products.length})
                                        </button>
                                    </li>
                                    {Object.keys(productCategories).map((category, index) => (
                                        <li key={index} className="mb-12">
                                            <button
                                                style={{
                                                    width: "100%",
                                                    textAlign: "left",
                                                    padding: "8px 12px",
                                                    borderRadius: "4px",
                                                    backgroundColor: selectedCategory === category ? "#299E60" : "transparent",
                                                    color: selectedCategory === category ? "white" : "#111827",
                                                    transition: "background-color 0.2s ease",
                                                }}
                                                onClick={() => setSelectedCategory(category)}
                                            >
                                                {category} ({productCategories[category].length})
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar End */}

                    {/* Content Start */}
                    <div className="col-lg-9">
                        <div className="flex-between gap-16 flex-wrap mb-40 ">
                            <span className="text-gray-900">
                                Showing {filteredProducts.length} of {products.length} results
                            </span>
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
                                <button onClick={sidebarController}
                                    type="button"
                                    className="w-44 h-44 d-lg-none d-flex flex-center border border-gray-100 rounded-6 text-2xl sidebar-btn"
                                >
                                    <i className="ph-bold ph-funnel" />
                                </button>
                            </div>
                        </div>

                        <div className={`list-grid-wrapper ${grid && "list-view"}`}>
                            {filteredProducts.map((product, index) => (
                                <ScrollAnimation 
                                key={ product._id || index } 
                                animateIn="fadeIn" 
                                duration={2} 
                                animateOnce={true}>
                                    <ProductsCard product={product} />
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                    {/* Content End */}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;