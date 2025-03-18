import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../home/Footer";
import TopHeader from "../home/TopHeader";
import ProductDetails from "./ProductDetails";
import Breadcrumbs from "../common/Breadcrumbs";
import Suggestions from "./Suggestions";
import NewsLetter from "../home/NewsLetter";
import PreloaderTwo from "../common/PreloaderTwo";

const ProductDetailsPage = () => {
    return (
        <>
            <PreloaderTwo />

            <ScrollToTop smooth color="#299E60" />

            <TopHeader />

            <Breadcrumbs main="All Products" parent="Products" />

            <ProductDetails />

            <Suggestions />

            <NewsLetter />

            <Footer />
        </>
    );
};

export default ProductDetailsPage;