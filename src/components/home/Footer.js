import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/agh_logo1.png'
import { useSelector } from 'react-redux'
import { ROUTES } from '../../constant/routes'

export default function Footer() {
    const categories = useSelector((state) => state?.products?.categories)
    const navigation = useNavigate()

    return (
        <footer className="footer py-80">
            {/* <img
                src="assets/images/bg/body-bottom-bg.png"
                alt="BG"
                className="body-bottom-bg"
            /> */}
            <div className="container container-lg">
                <div className="footer-item-wrapper d-flex align-items-start flex-wrap" style={{ justifyContent: "space-evenly" }}>
                    <div className="footer-item">
                        <div className="footer-item__logo">
                            <Link to="/">
                                {" "}
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <p className="mb-24">
                            We're Grocery Shop, an innovative team of food supliers.
                        </p>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-map-pin" />
                            </span>
                            <span className="text-md text-gray-900 ">
                                S.Y. NO 215/C, AYODHAYA X ROAD, <br />KANDLAKOYA, MEDCHAL, Rangareddi, <br />Telangana, India, 501401
                            </span>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-phone-call" />
                            </span>
                            <div className="flex-align gap-16 flex-wrap">
                                <Link
                                    to="/tel:+00123456789"
                                    className="text-md text-gray-900 hover-text-main-600"
                                >
                                    +91 9104592065
                                </Link>

                            </div>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-envelope" />
                            </span>
                            <Link
                                to="/mailto:osmagrimart@gmail.com"
                                className="text-md text-gray-900 hover-text-main-600"
                            >
                                osmagrimart@gmail.com
                            </Link>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Information</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Become a Vendor
                                </Link>
                            </li>

                            <li className="mb-16">
                                <Link to={ROUTES.privacyPolicy} className="text-gray-600 hover-text-main-600">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to={ROUTES.terms_conditioon} className="text-gray-600 hover-text-main-600">
                                    Terms & conditios
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to={ROUTES.refundPolicy} className="text-gray-600 hover-text-main-600">
                                    Refund policy
                                </Link>
                            </li>
                            <li className="">
                                <Link to={ROUTES.cancellationPolicy} className="text-gray-600 hover-text-main-600">
                                    Cancellation Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="footer-item">
                        <h6 className="footer-item__title">Customer Support</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Help Center
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link
                                    to="/contact"
                                    className="text-gray-600 hover-text-main-600"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li className="">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Online Shopping
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                    <div className="footer-item">
                        <h6 className="footer-item__title">My Account</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="#" className="text-gray-600 hover-text-main-600">
                                    My Account
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to={ROUTES.MyOrders} className="text-gray-600 hover-text-main-600">
                                    Order History
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to={'/cart'} className="text-gray-600 hover-text-main-600">
                                    Shoping Cart
                                </Link>
                            </li>
                            {/* <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Compare
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Help Ticket
                                </Link>
                            </li> */}
                            <li className="">
                                <Link to={ROUTES.wishlist} className="text-gray-600 hover-text-main-600">
                                    Wishlist
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Categories</h6>
                        <ul className="footer-menu">
                            {
                                categories && categories?.data?.map((data, index) => (
                                    <li style={{ cursor: "pointer" }} className="mb-16" key={index}>
                                        <div className="text-gray-600 hover-text-main-600" onClick={() => navigation(ROUTES.ProductByCategory, { state: data })}>
                                            {data?.category_name}
                                        </div>
                                    </li>
                                ))
                            }


                        </ul>
                    </div>

                </div>
            </div>
        </footer>)
}
