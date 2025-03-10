import React, { useEffect, useRef, useState } from 'react'
import query from 'jquery';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/agh_logo.png'
import blue from '../../assets/images/blue.png'
import purple from '../../assets/images/purple.png'
import yellow from '../../assets/images/yellow.png'
import red from '../../assets/images/red.png'
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart_list, getAllCategories, user_wishlist_list } from '../../redux/actions/ProductAction';
import axios from 'axios';
import Dialogue from '../common/Dialogue';
import { ROUTES } from '../../constant/routes';
import { bindActionCreators } from 'redux';
import * as ProductAction from '../../redux/actions/ProductAction'
import * as HomeAction from '../../redux/actions/HomeAction'

export default function TopHeader(props) {
    const [scroll, setScroll] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)
    const [category, setCategory] = useState(null)
    const dispatch = useDispatch()
    const categories = useSelector((state) => state?.products?.categories)
    const isLoggedIn = localStorage.getItem('login')
    const user = JSON.parse(localStorage.getItem('user'))
    const [logout, setLogout] = useState(false)
    const cart = useSelector((state) => state.products?.cartData)
    const wishlist = useSelector((state) => state.products?.all_wishlist)
    const navigation = useNavigate()
    const { search_product } = bindActionCreators(ProductAction, dispatch)
    const [list, setList] = useState([])
    const [search, setSearch] = useState(false)
    const inputRef = useRef(null);
    const { get_notifications } = bindActionCreators(HomeAction, dispatch)
    const isSendNotifications = sessionStorage.getItem('isSendNotifications')

    function requestNotificationPermission() {
        if ("Notification" in window) {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    console.log("Notification permission granted.");
                }
            });
        } else {
            console.log("This browser does not support desktop notification");
        }
    }


    function showNotification(title, options) {
        if (Notification.permission === "granted") {
            new Notification(title, options);
        } else {
            console.log("Notification permission is not granted.");
        }
    }

    const handleShowNotification = (data) => {
        const options = {
            body: data?.notification?.description
            ,
            icon: "https://i.ibb.co/HPntdfb/favicon.png", // Optional: icon path
        };
        showNotification(data?.notification?.notification_title, options);
    };

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

    useEffect(() => {
        (async () => {
            dispatch(getAllCategories())
            const ip = await axios.get("https://api.ipify.org/?format=json");
            localStorage.setItem('ip_address', ip?.data?.ip)
            dispatch(add_to_cart_list({ user_id: user?.data?.id || null }))
            dispatch(user_wishlist_list({ user_id: user?.data?.id || null }))
            requestNotificationPermission();
            if (!isSendNotifications) {
                const resData = await get_notifications()
                console.log("resData: ", resData)
                sessionStorage.setItem('isSendNotifications', true)
                if (resData?.statuscode === 200) {
                    resData?.data?.map((data, index) => {
                        setTimeout(() => {
                            handleShowNotification(data)
                        }, index === 0 ? 3000 : 7000)
                    })
                }
            }



        })()
    }, [props?.isUpdate, isLoggedIn])

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = sessionStorage.removeItem('isSendNotifications'); // Required for most browsers to display a confirmation dialog
        };

        // Add event listener to prevent page refresh
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);



    // Set the default language
    const [selectedLanguage, setSelectedLanguage] = useState("Eng");


    // Set the default currency
    const [selectedCurrency, setSelectedCurrency] = useState("USD");

    // static categories
    const staticCategories = [
        { id: 1, category_name: "Organic Fertilizer", category_image: red },
        { id: 2, category_name: "Chemical Fertilizer", category_image: yellow },
        { id: 3, category_name: "Compost", category_image: blue },
        { id: 4, category_name: "Manure", category_image: purple }
    ];

    // Mobile menu support
    const [menuActive, setMenuActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);
    const handleMenuClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };


    // Search control support
    const [activeSearch, setActiveSearch] = useState(false)
    const handleSearchToggle = () => {
        setActiveSearch(!activeSearch);
    };

    // category control support
    const [activeCategory, setActiveCategory] = useState(false)

    const [activeIndexCat, setActiveIndexCat] = useState(null);


    const handleDialogueAction = (data) => {
        setLogout(false)
        if (data) {
            localStorage.removeItem('login')
            localStorage.removeItem('user')
            navigation(ROUTES.home, { replace: true })
        }
    }


    const handleSearch = async (e) => {
        console.log("e", e.target.value, category)
        if (e.target.value) {
            setSearch(true)
        }
        else {
            setSearch(false)
        }
        const resData = await search_product({ product_name: e.target.value, category_id: null })
        setList(resData?.data)
    }

    const handleNavigation = (slug, flag = false) => {
        navigation(ROUTES.productDetails + "/" + slug);
        if (inputRef.current) inputRef.current.value = ''; // Clear input
        setSearch(false); // Hide the suggestions
        if (flag) {
            setActiveSearch(!activeSearch);

        }

    };


    return (
        <>
            <div className="overlay" />
            <Dialogue content={"Do you confirm you want to log out of your account?"} open={logout} fn={handleDialogueAction} />
            <div className={`side-overlay ${(menuActive || activeCategory) && "show"}`} />
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
                                        <i className="ph ph-shopping-cart mr-1" style={{ fontSize: "16px" }} />
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
                                        <i className="ph ph-info mr-1" style={{ fontSize: "16px" }} />
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
                                                <i className="ph ph-shopping-cart mr-1" style={{ fontSize: "20px" }} />
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