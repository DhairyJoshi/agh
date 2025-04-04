import React, { useEffect, useState } from 'react'
import query from 'jquery';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/agh_logo.png'

export default function TopHeader() {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset < 150) {
                setScroll(false);
            } else if (window.pageYOffset > 150) {
                setScroll(true);
            }
            return () => (window.onscroll = null);
        };
        const selectElement = query('.js-example-basic-single');
        selectElement.select2();

        return () => {
            if (selectElement.data('select2')) {
                selectElement.select2('destroy');
            }
        };

    }, []);

    // useEffect(() => {
    //     const handleBeforeUnload = (event) => {
    //         event.preventDefault();
    //         event.returnValue = sessionStorage.removeItem('isSendNotifications'); // Required for most browsers to display a confirmation dialog
    //     };

    //     // Add event listener to prevent page refresh
    //     window.addEventListener('beforeunload', handleBeforeUnload);

    //     // Cleanup the event listener on component unmount
    //     return () => {
    //         window.removeEventListener('beforeunload', handleBeforeUnload);
    //     };
    // }, []);

    // Mobile menu support
    const [menuActive, setMenuActive] = useState(false)
    const [activeIndex /* eslint-disable-line no-unused-vars */, setActiveIndex] = useState(null);
    // const handleMenuClick = (index) => {
    //     setActiveIndex(activeIndex === index ? null : index);
    // };
    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };

    return (
        <>
            <div className="overlay" />
            <div className={`side-overlay ${(menuActive) && "show"}`} />
            {/* ==================== Mobile Menu Start Here ==================== */}
            <div className={`mobile-menu scroll-sm d-lg-none d-block ${menuActive && "active"}`}>
                <button onClick={() => { handleMenuToggle(); setActiveIndex(null) }} type="button" className="close-button">

                    <i className="ph ph-x" />{" "}
                </button>
                <div className="mobile-menu__inner">
                    <Link to="/" className="mobile-menu__logo">
                        <img src={logo} alt="Logo" style={{ width: "100px" }} />
                    </Link>
                    <div className="mobile-menu__menu">
                        {/* Nav Menu Start */}
                        <ul className="nav-menu flex-align nav-menu--mobile">


                            {/* Contact Us Menu */}

                            <li className="nav-menu__item">
                                <Link
                                    to="/"
                                    className="nav-menu__link"
                                    onClick={() => setActiveIndex(null)}
                                >
                                    <div className='d-flex'>
                                        <i className="ph ph-house mr-1" style={{ fontSize: "16px" }} />
                                        Home
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-menu__item">
                                <Link
                                    to="/gallery"
                                    className="nav-menu__link"
                                    onClick={() => setActiveIndex(null)}
                                >
                                    <div className='d-flex'>
                                        <i className="ph ph-images mr-1" style={{ fontSize: "16px" }} />
                                        Gallery
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-menu__item">
                                <Link
                                    to="/products"
                                    className="nav-menu__link"
                                    onClick={() => setActiveIndex(null)}
                                >
                                    <div className='d-flex'>
                                        <i className="ph ph-shopping-cart mr-1" style={{ fontSize: "16px", color: "transparent" }} />
                                        Products
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-menu__item">
                                <Link
                                    to="/contact"
                                    className="nav-menu__link"
                                    onClick={() => setActiveIndex(null)}
                                >
                                    <div className='d-flex'>
                                        <i className="ph ph-headset mr-1" style={{ fontSize: "16px" }} />
                                        Contact
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-menu__item">
                                <Link
                                    to="/about"
                                    className="nav-menu__link"
                                    onClick={() => setActiveIndex(null)}
                                >
                                    <div className='d-flex'>
                                        <i className="ph ph-info mr-1" style={{ fontSize: "16px", color: "transparent" }} />
                                        About Us
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        {/* Nav Menu End */}
                    </div>
                </div>
            </div>
            {/* ==================== Mobile Menu End Here ==================== */}

            {/* ==================== Header Start Here ==================== */}
            <header className={`header bg-white border-bottom border-gray-100 d-flex align-items-center justify-content-center ${scroll && "fixed-header"}`} style={{ height: '10vh' }}>
                <div className="container container-lg">
                    <nav className="header-inner d-flex justify-content-between gap-8">
                        <div className="flex-align menu-category-wrapper " style={{ width: "100%", justifyContent: "space-between" }}>
                            {/* Category Dropdown Start */}
                            <div className="category on-hover-item">
                                <Link to="/" className="link" style={{ padding: "10px 0px" }}>
                                    {/* Large Screen Logo */}
                                    <img src={logo} alt="Logo" style={{ width: "60px" }} />
                                </Link>
                            </div>
                            {/* Category Dropdown End  */}
                            {/* Menu Start  */}
                            <div className="header-menu d-lg-block d-none">
                                {/* Nav Menu Start */}
                                <ul className="nav-menu flex-align ">

                                    <li className="nav-menu__item">
                                        <NavLink to="/" className={(navData) =>
                                            navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                        }>
                                            <div className='d-flex' style={{ alignItems: "center" }}>
                                                <i className="ph ph-house mr-1" style={{ fontSize: "20px" }} />
                                                Home
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-menu__item">
                                        <NavLink to="/gallery" className={(navData) =>
                                            navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                        }>
                                            <div className='d-flex' style={{ alignItems: "center" }}>
                                                <i className="ph ph-images mr-1" style={{ fontSize: "20px" }} />
                                                Gallery
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-menu__item">
                                        <NavLink to="/products" className={(navData) =>
                                            navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                        }>
                                            <div className='d-flex' style={{ alignItems: "center" }}>
                                                {/* <i className="ph ph-shopping-cart mr-1" style={{ fontSize: "20px" }} /> */}
                                                Products
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-menu__item">
                                        <NavLink to="/contact" className={(navData) =>
                                            navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                        }>
                                            <div className='d-flex' style={{ alignItems: "center" }}>
                                                <i className="ph ph-headset mr-1" style={{ fontSize: "20px" }} />
                                                Contact
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-menu__item">
                                        <NavLink to="/about" className={(navData) =>
                                            navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                        }>
                                            <div className='d-flex' style={{ alignItems: "center" }}>
                                                About Us
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>
                                {/* Nav Menu End */}
                            </div>
                            {/* Menu End  */}
                        </div>
                        {/* Header Right start */}
                        <div className="header-right flex-align">
                            <button
                                onClick={handleMenuToggle}
                                type="button"
                                className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
                            >
                                {" "}
                                <i className="ph ph-list" />{" "}
                            </button>
                        </div>
                        {/* Header Right End  */}
                    </nav>
                </div>
            </header>
            {/* ==================== Header End Here ==================== */}
        </>
    )
}