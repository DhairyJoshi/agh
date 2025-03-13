import React from "react";
import Footer from "../../components/home/Footer";
import ScrollToTop from "react-scroll-to-top";
import TopHeader from "../home/TopHeader";
import Breadcrumbs from "../common/Breadcrumbs";
import ProductsSection from "./ProductsSection";

const Products = () => {

  return (
    <>
      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      <TopHeader />

      <Breadcrumbs main="All Products" parent="Products" /> 

      <ProductsSection />

      <Footer />
    </>
  );
};

export default Products;