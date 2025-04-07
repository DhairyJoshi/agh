import './App.css';
import Home from './components/home/Home';
import RouteScrollToTop from "./helper/RouteScrollToTop";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import { Route, Routes } from 'react-router-dom';
import Products from './components/products/Products';
import ContactUs from './components/contact/ContactUs';
import { ROUTES } from './constant/routes';
import 'react-phone-input-2/lib/style.css';
import Terms from './components/policies/Terms';
import PrivacyPolicy from './components/policies/PrivacyPolicy';
import RefundPolicy from './components/policies/RefundPolicy';
import Cancellation from './components/policies/Cancellation';
import "react-country-state-city/dist/react-country-state-city.css";
import Gallery from './components/gallery/Gallery';
import ProductDetailsPage from './components/product-details/ProductDetailsPage';
import Inquiry from './components/inquiry/Inquiry';
import About from './components/about/About';
import SeedDetailsPage from './components/seed-details/SeedDetailsPage';

function App() {
  return (
    <>
      <RouteScrollToTop />
      <PhosphorIconInit />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/seed-details" element={<SeedDetailsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/inquiry/:id" element={<Inquiry />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/about" element={<About />} />
        <Route path={ROUTES.terms_conditioon} element={<Terms />} />
        <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicy />} />
        <Route path={ROUTES.refundPolicy} element={<RefundPolicy />} />
        <Route path={ROUTES.cancellationPolicy} element={<Cancellation />} />

      </Routes>
    </>
  );
}

export default App;
