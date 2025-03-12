import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/agh_logo.png'
import { useSelector } from 'react-redux'
import { ROUTES } from '../../constant/routes'

export default function Footer() {
    const categories = useSelector((state) => state?.products?.categories)
    const navigation = useNavigate()

    return (
        <footer className="footer pt-80 d-flex flex-column">
            <div className="container container-lg pb-40">
                <div className="footer-item-wrapper d-flex flex-lg-row flex-column justify-content-between align-items-center align-items-lg-start flex-wrap">
                    <div className="footer-item d-flex flex-column align-items-center align-items-lg-start">
                        <div className="footer-item__logo">
                            <Link to="/" className="link">
                                <img src={logo} alt="Logo" style={{ width: "80px", height: 'auto' }} />
                            </Link>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <i className="ph ph-instagram-logo fs-2 me-4" style={{ color: '#333333' }}></i>

                            <i className="ph ph-linkedin-logo fs-2 me-4" style={{ color: '#333333' }}></i>

                            <i className="ph ph-whatsapp-logo fs-2" style={{ color: '#333333' }}></i>
                            
                            <i className="ph ph-x-logo fs-2" style={{ color: '#333333' }}></i>
                        </div>
                    </div>
                    <div className="footer-item d-flex flex-column align-items-center align-items-lg-start">
                        <h6 className="footer-item__title">Categories</h6>
                        <ul className="footer-menu d-flex flex-column align-items-center align-items-lg-start">
                            <li className="mb-16">
                                <Link to="#" className="text-gray-600 hover-text-main-600">
                                    Nitrogen Based
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to={ROUTES.MyOrders} className="text-gray-600 hover-text-main-600">
                                    Phosphorus Based
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to={'/cart'} className="text-gray-600 hover-text-main-600">
                                    Potassium-Based
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to={ROUTES.wishlist} className="text-gray-600 hover-text-main-600">
                                    Compound Fertilizers
                                </Link>
                            </li>
                            <li className="">
                                <Link to={ROUTES.wishlist} className="text-gray-600 hover-text-main-600">
                                    Organic Fertilizers
                                </Link>
                            </li>   
                        </ul>
                    </div>
                    <div className="footer-item d-flex flex-column align-items-center align-items-lg-start">
                        <h6 className="footer-item__title">Information</h6>
                        <ul className="footer-menu d-flex flex-column align-items-center align-items-lg-start">
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
                    <div className="footer-item d-flex flex-column align-items-center align-items-lg-start">
                        <h6 className="footer-item__title">Contact Information:</h6>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-map-pin" />
                            </span>
                            <span className="text-md text-gray-600 ">
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
                                    className="text-md text-gray-600 hover-text-main-600"
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
                                className="text-md text-gray-600 hover-text-main-600"
                            >
                                osmagrimart@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#299e60', padding: '1rem 0rem' }}>    
                <div className="container container-lg d-flex justify-content-between align-items-center text-white lh-base">
                    <div className="d-flex flex-column me-64">
                        <h6 className="footer-item__title text-white mb-6">Flourish with AGH Fertilizers</h6>
                        <span className="fs-6">From Root to Harvest – Unleash Maximum Growth with Every Drop</span>
                    </div>

                    <div className="fs-6">
                        &copy;2025 AGH Fertilizers, All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}