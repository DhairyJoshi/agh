import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import RouteScrollToTop from "./helper/RouteScrollToTop";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/product/ProductDetails';
import Shop from './components/shop/Shop';
import ContactUs from './components/contact/ContactUs';
import Cart from './components/cart/Cart';
import Checkout from './components/cart/Checkout';
import { ROUTES } from './constant/routes';
import 'react-phone-input-2/lib/style.css';
import Order from './components/order/Order';
import ProductByCategory from './components/category/ProductByCategory';
import Wishlist from './components/wishlist/Wishlist';
import Terms from './components/policies/Terms';
import PrivacyPolicy from './components/policies/PrivacyPolicy';
import RefundPolicy from './components/policies/RefundPolicy';
import Cancellation from './components/policies/Cancellation';
import Success from './components/payment-gateway/Success';
import "react-country-state-city/dist/react-country-state-city.css";
import Offers from './components/home/Offers';
import Offer from './components/offers/Offer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { count_visitors } from './redux/actions/HomeAction';


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
        <Route path={`${ROUTES.productDetails}/:slug`} element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path={ROUTES.checkout} element={<Checkout />} /> 
        <Route path={ROUTES.MyOrders} element={<Order />} />
        <Route path={ROUTES.ProductByCategory} element={<ProductByCategory />} />
        <Route path={ROUTES.wishlist} element={<Wishlist />} />
        <Route path={ROUTES.terms_conditioon} element={<Terms />} />
        <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicy />} />
        <Route path={ROUTES.refundPolicy} element={<RefundPolicy />} />
        <Route path={ROUTES.cancellationPolicy} element={<Cancellation />} />
        <Route path={ROUTES.paymentSuccess} element={<Success />} />
        <Route path={ROUTES.offers} element={<Offer />} />

      </Routes>
    </>
  );
}

export default App;
