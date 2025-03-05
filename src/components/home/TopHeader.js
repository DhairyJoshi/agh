import React, { useEffect, useRef, useState } from 'react'
import query from 'jquery';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/agh_logo2.png'
import blue from '../../assets/images/blue.png'
import purple from '../../assets/images/purple.png'
import yellow from '../../assets/images/yellow.png'
import red from '../../assets/images/red.png'
import smallLogo from '../../assets/images/agh_logo3.png'
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart_list, getAllCategories, user_wishlist_list } from '../../redux/actions/ProductAction';
import Login from '../login/Login';
import axios from 'axios';
import Dialogue from '../common/Dialogue';
import { ROUTES } from '../../constant/routes';
import Profile from '../profile/Profile';
import { bindActionCreators } from 'redux';
import * as ProductAction from '../../redux/actions/ProductAction'
import * as HomeAction from '../../redux/actions/HomeAction'

export default function TopHeader(props) {
    const [scroll, setScroll] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)
    const [category, setCategory] = useState(null)
    const [openProfile, setOpenProfile] = useState(false)
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
    const handleCategoryToggle = () => {
        setActiveCategory(!activeCategory);
    };
    const [activeIndexCat, setActiveIndexCat] = useState(null);
    const handleCatClick = (index) => {
        setActiveIndexCat(activeIndexCat === index ? null : index);
    };

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
            <Login open={openLogin} state={setOpenLogin} />
            <Dialogue content={"Do you confirm you want to log out of your account?"} open={logout} fn={handleDialogueAction} />
            <Profile open={openProfile} setOpen={setOpenProfile} />
            <div className={`side-overlay ${(menuActive || activeCategory) && "show"}`} />
            {/* ==================== Search Box Start Here ==================== */}
            <form action="#" className={`search-box ${activeSearch && "active"}`}>
                <button onClick={handleSearchToggle}
                    type="button"
                    className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
                >
                    <i className="ph ph-x" />
                </button>
                <div className="container">
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control py-16 px-24 text-xl rounded-pill pe-64"
                            placeholder="Search for a product or brand"
                            onChange={(e) => handleSearch(e)}
                            ref={inputRef}
                        />
                        <button
                            type="submit"
                            className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                        >
                            <i className="ph ph-magnifying-glass" />
                        </button>
                    </div>
                    {
                        search ?
                            <div className='ul-class' style={{ background: "#ffffff", color: "#000000", zIndex: "999", borderRadius: "20px", cursor: "pointer", marginTop: "0.5rem" }}>
                                <ul style={{ maxHeight: "50vh", overflow: "auto" }}>
                                    {
                                        list?.map((data, index) => (
                                            <li
                                                key={index}
                                                style={{ padding: "10px" }}
                                                onClick={() => handleNavigation(data?.slug, true)}
                                                className='list-class'
                                            >{data?.product_name}</li>
                                        ))
                                    }

                                </ul>
                            </div>
                            :
                            <></>
                    }
                </div>
            </form>
            {/* ==================== Search Box End Here ==================== */}
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
                                    to="/shop"
                                    className="nav-menu__link"
                                    onClick={() => setActiveIndex(null)}
                                >
                                    <div className='d-flex'>
                                        <i className="ph ph-shopping-cart mr-1" style={{ fontSize: "16px" }} />
                                        Shop
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-menu__item">
                                <Link
                                    to={ROUTES.offers}
                                    className="nav-menu__link"
                                    onClick={() => setActiveIndex(null)}
                                >
                                    <div className='d-flex'>
                                        <i className="ph ph-seal-percent mr-1" style={{ fontSize: "16px" }} />
                                        Offers
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-menu__item">
                                <Link
                                    to={isLoggedIn ? "/contact" : "#"}
                                    className="nav-menu__link"
                                    onClick={(e) => {
                                        if (!isLoggedIn) {
                                            e.preventDefault(); // Prevent navigation
                                            setOpenLogin(true); // Trigger login state change or show login modal
                                        } else {
                                            setActiveIndex(null); // Proceed as usual if logged in
                                        }
                                    }}                                >
                                    <div className='d-flex'>
                                        <i className="ph ph-headset mr-1" style={{ fontSize: "16px" }} />
                                        Contact
                                    </div>
                                </Link>
                            </li>
                            {
                                isLoggedIn ?
                                    // <li className="nav-menu__item">
                                    //     <Link
                                    //         to="#"
                                    //         className="nav-menu__link"
                                    //         onClick={() => {
                                    //             setActiveIndex(null);
                                    //             handleAccount();
                                    //         }}
                                    //     >
                                    //         <div className='d-flex'>
                                    //             <i className="ph ph-user mr-1" style={{ fontSize: "16px" }} />
                                    //             My Account
                                    //         </div>
                                    //     </Link>
                                    // </li>
                                    <li onClick={() => handleMenuClick(3)}
                                        className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 3 ? "d-block" : ""
                                            }`}
                                    >
                                        <Link
                                            to="#"
                                            className="nav-menu__link"

                                        >
                                            My Account
                                        </Link>
                                        <ul
                                            className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 3 ? "open" : ""
                                                }`}
                                        >
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to="#"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    onClick={() => {
                                                        setActiveIndex(null);
                                                        setOpenProfile(true)
                                                    }}
                                                >
                                                    {" "}
                                                    Profile
                                                </Link>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to={ROUTES.MyOrders}
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    onClick={() => setActiveIndex(null)}
                                                >
                                                    {" "}
                                                    My Orders
                                                </Link>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <Link
                                                    to="#"
                                                    className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    onClick={() => {
                                                        setActiveIndex(null);
                                                        setLogout(true);
                                                    }}
                                                >
                                                    {" "}
                                                    Logout
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    :
                                    <li className="nav-menu__item">
                                        <Link
                                            to="#"
                                            className="nav-menu__link"
                                            onClick={() => {
                                                setActiveIndex(null);
                                                setOpenLogin(true);
                                            }}
                                        >
                                            <div className='d-flex'>
                                                <i className="ph ph-sign-in mr-1" style={{ fontSize: "16px" }} />
                                                Sign in
                                            </div>
                                        </Link>
                                    </li>
                            }


                        </ul>
                        {/* Nav Menu End */}
                    </div>
                </div>
            </div>
            {/* ==================== Mobile Menu End Here ==================== */}
            {/* ======================= Middle Top Start ========================= */}

            {/* ======================= Middle Top End ========================= */}
            {/* ======================= Middle Header Start ========================= */}
            <header className="header-middle bg-color-one border-bottom border-gray-100">
                <div className="container container-lg">
                    <nav className="header-inner d-flex justify-content-center justify-content-sm-between">
                        {/* Logo Start */}
                        <div className="logo">
                            <Link to="/" className="link" style={{ padding: "10px 0px" }}>
                                {/* Large Screen Logo */}
                                <img src={logo} alt="Logo" className="d-none d-sm-block" style={{ width: "120px" }} />

                                {/* Small Screen Logo */}
                                <img src={smallLogo} alt="Small Logo" className="d-block d-sm-none" style={{ width: "200px" }} />
                            </Link>
                        </div>
                        {/* Logo End  */}
                        {/* form location Start */}
                        <form action="#" className="flex-align flex-wrap form-location-wrapper">
                            <div className="search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none">
                                <select defaultValue={1}
                                    className="js-example-basic-single border border-gray-200 border-end-0"
                                    name="state"
                                >
                                    <option value={1} >
                                        All Categories
                                    </option>
                                    {
                                        categories && categories?.data?.map((data, index) => (
                                            <option key={index} value={index}>{data?.category_name}</option>

                                        ))
                                    }

                                </select>
                                <div className="search-form__wrapper position-relative">
                                    <div>
                                        <input
                                            type="text"
                                            className="search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44"
                                            placeholder="Search for a product or brand"
                                            onChange={(e) => handleSearch(e)}
                                            ref={inputRef}

                                        />
                                        <button
                                            type="submit"
                                            className="w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                                        >
                                            <i className="ph ph-magnifying-glass" />
                                        </button>
                                    </div>
                                    {
                                        search ?
                                            <div className='ul-class' style={{ width: "50%", background: "#ffffff", color: "#000000", zIndex: "999", borderRadius: "10px", cursor: "pointer" }}>
                                                <ul style={{ maxHeight: "150px", overflow: "auto" }}>
                                                    {
                                                        list?.map((data, index) => (
                                                            <li
                                                                key={index}
                                                                style={{ padding: "10px" }}
                                                                onClick={() => handleNavigation(data?.slug)}
                                                                className='list-class'
                                                            >{data?.product_name}</li>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                            :
                                            <></>
                                    }

                                </div>
                            </div>

                        </form>
                        {/* form location start */}
                        {/* Header Middle Right start */}
                        {/* <div className="header-right flex-align d-lg-block d-none">
                            <div className="flex-align flex-wrap gap-12">
                                <button
                                    type="button"
                                    className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                >
                                    <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                        <i className="ph ph-magnifying-glass" />
                                    </span>
                                </button>

                            </div>
                        </div> */}
                        {/* Header Middle Right End  */}
                    </nav>
                </div>
            </header>
            {/* ======================= Middle Header End ========================= */}
            {/* ==================== Header Start Here ==================== */}
            <header className={`header bg-white border-bottom border-gray-100 ${scroll && "fixed-header"}`}>
                <div className="container container-lg">
                    <nav className="header-inner d-flex justify-content-between gap-8">
                        <div className="flex-align menu-category-wrapper " style={{ width: "100%", justifyContent: "space-between" }}>
                            {/* Category Dropdown Start */}
                            <div className="category on-hover-item">
                                <button
                                    onClick={handleCategoryToggle}
                                    type="button"
                                    className="category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-heading"
                                >
                                    <span className="icon text-2xl d-xs-flex d-none">
                                        <i className="ph ph-dots-nine" />
                                    </span>
                                    <span className="d-sm-flex d-none">All</span> Categories
                                    <span className="arrow-icon text-xl d-flex">
                                        <i className="ph ph-caret-down" />
                                    </span>
                                </button>
                                <div className={`responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper ${activeCategory && "active"}`}>
                                    <button
                                        onClick={() => { handleCategoryToggle(); setActiveIndexCat(null) }}
                                        type="button"
                                        className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                                    >
                                        {" "}
                                        <i className="ph ph-x" />{" "}
                                    </button>
                                    {/* Logo Start */}
                                    <div className="logo px-16 d-lg-none d-block">
                                        <Link to="/" className="link">
                                            <img src={logo} style={{ width: "100px" }} alt="Logo" />
                                        </Link>
                                    </div>
                                    {/* Logo End */}
                                    <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
                                        {/* {
                                            categories && categories?.data?.map((data, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => {
                                                        handleCatClick(0);
                                                        navigation(ROUTES.ProductByCategory, { state: data })
                                                    }}
                                                    className={`has-submenus-submenu ${activeIndexCat === 0 ? "active" : ""}`}
                                                >
                                                    <Link onClick={() => setActiveIndexCat(null)}
                                                        to="#"
                                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                                    >
                                                        <span className="text-xl d-flex">
                                                            <i className="ph ph-carrot" /> //comment this
                                                            <img style={{ width: "30px" }} src={IMAGE + data?.category_image} alt={data.category_name} />
                                                        </span>
                                                        <span>{data?.category_name}</span>
                                                        <span className="icon text-md d-flex ms-auto">
                                                            <i className="ph ph-caret-right" />
                                                        </span>
                                                    </Link>

                                                </li>
                                            ))
                                        } */}


                                        {staticCategories.map((data, index) => (
                                            <li
                                                key={data.id}
                                                onClick={() => setActiveIndexCat(index)}
                                                className={`has-submenus-submenu ${activeIndexCat === index ? "active" : ""}`}
                                            >
                                                <Link
                                                    onClick={() => setActiveIndexCat(null)}
                                                    to="#"
                                                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <span className="text-xl d-flex">
                                                        <img style={{ width: "30px" }} src={data.category_image} alt={data.category_name} />
                                                    </span>
                                                    <span>{data.category_name}</span>
                                                    <span className="icon text-md d-flex ms-auto">
                                                        <i className="ph ph-caret-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
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
                                        <NavLink to="/shop" className={(navData) =>
                                            navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                        }>
                                            <div className='d-flex' style={{ alignItems: "center" }}>
                                                <i className="ph ph-shopping-cart mr-1" style={{ fontSize: "20px" }} />
                                                Shop
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-menu__item">
                                        <NavLink to={ROUTES.offers} className={(navData) =>
                                            navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                        }>
                                            <div className='d-flex' style={{ alignItems: "center" }}>
                                                <i className="ph ph-seal-percent mr-1" style={{ fontSize: "20px" }} />
                                                Offers
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-menu__item">
                                        <NavLink
                                            to={isLoggedIn ? "/contact" : "#"}
                                            className={(navData) =>
                                                window.location.pathname === "/contact" ? "nav-menu__link activePage" : "nav-menu__link"
                                            }
                                            onClick={(e) => {
                                                if (!isLoggedIn) {
                                                    e.preventDefault(); // Prevent navigation
                                                    setOpenLogin(true); // Trigger login state change or show login modal
                                                }
                                            }}
                                        >


                                            <div className='d-flex' style={{ alignItems: "center" }}>
                                                <i className="ph ph-headset mr-1" style={{ fontSize: "20px" }} />
                                                Contact
                                            </div>
                                        </NavLink>
                                    </li>

                                    {
                                        isLoggedIn ?
                                            // <li className="nav-menu__item">
                                            //     <NavLink to="#"
                                            //         className={"nav-menu__link"}
                                            //         onClick={() => handleAccount()}
                                            //     >
                                            //         <div className='d-flex' style={{ alignItems: "center" }}>
                                            //             <i className="ph ph-user mr-1" style={{ fontSize: "20px" }} />
                                            //             My Account
                                            //         </div>
                                            //     </NavLink>
                                            // </li>
                                            <li className="on-hover-item nav-menu__item has-submenu">
                                                <Link to="#" className="nav-menu__link">
                                                    My Account
                                                </Link>
                                                <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                                    <li className="common-dropdown__item nav-submenu__item">
                                                        <NavLink
                                                            to="#"
                                                            className={(navData) =>
                                                                navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                            }
                                                            onClick={() => setOpenProfile(true)}
                                                        >
                                                            {" "}
                                                            Profile
                                                        </NavLink>
                                                    </li>
                                                    <li className="common-dropdown__item nav-submenu__item">
                                                        <NavLink
                                                            to={ROUTES.MyOrders}
                                                            className={(navData) =>
                                                                navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                            }
                                                        >
                                                            {" "}
                                                            My Orders
                                                        </NavLink>
                                                    </li>
                                                    <li className="common-dropdown__item nav-submenu__item">
                                                        <NavLink
                                                            to="#"
                                                            onClick={() => setLogout(true)}
                                                            className={(navData) =>
                                                                navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                            }
                                                        >
                                                            {" "}
                                                            Logout
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            :
                                            <li className="nav-menu__item">
                                                <NavLink to="#"
                                                    className={"nav-menu__link"}
                                                    onClick={() => setOpenLogin(true)}
                                                >
                                                    <div className='d-flex' style={{ alignItems: "center" }}>
                                                        <i className="ph ph-sign-in mr-1" style={{ fontSize: "20px" }} />
                                                        Sign in
                                                    </div>
                                                </NavLink>
                                            </li>
                                    }




                                </ul>

                                {/* Nav Menu End */}
                            </div>
                            <div className='d-flex gap-10 '>

                                <button
                                    type="button"
                                    onClick={handleSearchToggle}
                                    className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                >
                                    <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                        <i className="ph ph-magnifying-glass" />
                                    </span>
                                </button>
                                <Link to={ROUTES.wishlist} className="flex-align gap-4 item-hover">
                                    <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-heart" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                            {wishlist?.data?.length || 0}
                                        </span>
                                    </span>
                                    <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                        Wishlist
                                    </span>
                                </Link>
                                <Link to="/cart" className="flex-align gap-4 item-hover">
                                    <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-shopping-cart-simple" />
                                        {
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                                {cart?.data?.length}
                                            </span>

                                        }

                                    </span>
                                    <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                        Cart
                                    </span>
                                </Link>
                            </div>

                            {/* Menu End  */}
                        </div>
                        {/* Header Right start */}
                        <div className="header-right flex-align">
                            {/* <div
                                to="/tel:01234567890"
                                className="bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none"
                            >
                                <div className="d-flex text-32">
                                    <i className="ph ph-phone-call" />
                                </div>
                                +91 9104592065
                            </div> */}
                            <div className="me-16 d-lg-none d-block">
                                <div className="flex-align flex-wrap gap-12  nav-class-menu">
                                    <button onClick={handleSearchToggle}
                                        type="button"
                                        className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                    >
                                        <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                            <i className="ph ph-magnifying-glass" />
                                        </span>
                                    </button>

                                    <Link to="/cart" className="flex-align gap-4 item-hover">
                                        <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph ph-shopping-cart-simple" />
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                                2
                                            </span>
                                        </span>
                                        <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                            Cart
                                        </span>
                                    </Link>
                                </div>
                            </div>
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