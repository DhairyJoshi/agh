import './App.css';
import Home from './components/home/Home';
import RouteScrollToTop from "./helper/RouteScrollToTop";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import { Route, Routes } from 'react-router-dom';
import Products from './components/products/Products';
import ContactUs from './components/contact/ContactUs';
import { ROUTES } from './constant/routes';
import 'react-phone-input-2/lib/style.css';
import ProductByCategory from './components/category/ProductByCategory';
import Terms from './components/policies/Terms';
import PrivacyPolicy from './components/policies/PrivacyPolicy';
import RefundPolicy from './components/policies/RefundPolicy';
import Cancellation from './components/policies/Cancellation';
import "react-country-state-city/dist/react-country-state-city.css";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { count_visitors } from './redux/actions/HomeAction';
import Gallery from './components/gallery/Gallery';
import ProductDetailsPage from './components/product-details/ProductDetailsPage';


function App() {
  const visited = sessionStorage.getItem("visited")
  const dispatch = useDispatch()

  useEffect(() => {
    if (!visited) {
      dispatch(count_visitors())
      sessionStorage.setItem("visited", true)
    }
  }, [])
  return (
    <>
      <RouteScrollToTop />
      <PhosphorIconInit />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path={ROUTES.ProductByCategory} element={<ProductByCategory />} />
        <Route path={ROUTES.terms_conditioon} element={<Terms />} />
        <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicy />} />
        <Route path={ROUTES.refundPolicy} element={<RefundPolicy />} />
        <Route path={ROUTES.cancellationPolicy} element={<Cancellation />} />

      </Routes>
    </>
  );
}

export default App;
