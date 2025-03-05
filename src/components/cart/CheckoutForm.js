import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { user_address_list } from '../../redux/actions/CheckoutAction';
import * as CheckoutAction from '../../redux/actions/CheckoutAction';
import { get_shipping_price } from '../../redux/actions/CheckoutAction';
import { ROUTES } from '../../constant/routes';
import { bindActionCreators } from 'redux';
import AlertMessage from '../common/AlertMessage';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RazorpayBtn from '../payment-gateway/RazorpayBtn';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
    LanguageSelect,
} from "react-country-state-city";

export default function CheckoutForm(props) {

    const cart = useSelector((state) => state.products?.cartData)
    const address = useSelector((state) => state.checkout?.address)
    console.log("address", cart)
    const user = JSON.parse(localStorage.getItem('user'))
    const login = JSON.parse(localStorage.getItem('login'))
    const dispatch = useDispatch()
    const [selectedPayment, setSelectedPayment] = useState("payment1");
    const [addAddress, setAddress] = useState(address?.data?.length === 0 ? true : false);
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [form, setForm] = useState(null)
    const navigation = useNavigate()
    const { address_create, address_update, address_delete } = bindActionCreators(CheckoutAction, dispatch)
    const [save, setSave] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [action, setAction] = useState(null);
    const [stateid, setstateid] = useState(0);


    useEffect(() => {
        (async () => {
            if (login) {
                dispatch(user_address_list({ user_id: user?.data?.id }))
                setTimeout(() => {


                }, 1500)
            }
            else {
                navigation(ROUTES.home, { replace: true })
            }
        })()
    }, [addAddress, save])

    useMemo(() => {

        dispatch(get_shipping_price({ user_id: user?.data?.id, address_id: address?.data?.[selectedIndex]?.id, coupon_price: null }))


    }, [address?.length, save])


    const handleSubmit = async (e) => {
        e.preventDefault()
        form.user_id = user?.data?.id
        const resData = await address_create(form)
        console.log("res", resData)
        if (resData?.statuscode === 200) {
            setForm({})
            setIsOpen(true)
            setMessage({ ...message, message: resData?.message, flag: "success" })
            setAddress(false)
        }
        else {
            setIsOpen(true)
            setMessage({ ...message, message: resData?.message, flag: "error" })
        }
    }
    const handleUpdate = async (e) => {
        e.preventDefault()
        form.user_id = user?.data?.id
        const resData = await address_update(form)
        console.log("res", resData)
        if (resData?.statuscode === 200) {
            setForm({})
            setIsOpen(true)
            setMessage({ ...message, message: resData?.message, flag: "success" })
            setAddress(false)
            setAction(null)
        }
        else {
            setIsOpen(true)
            setMessage({ ...message, message: resData?.message, flag: "error" })
        }
    }

    const handleDeleteAddress = async (data) => {
        const resData = await address_delete({ id: data.id })
        if (resData?.statuscode === 200) {
            setIsOpen(true)
            setMessage({ ...message, message: resData?.message, flag: "success" })
            setSave(!save)

        }
        else {
            setIsOpen(true)
            setMessage({ ...message, message: resData?.message, flag: "error" })
        }
    }

    const calculateTotal = () => {
        return cart?.data?.reduce((total, item) => {
            return total + (Number(item.product.final_price) * Number(item.quantity));
        }, 0).toFixed(2);
    }

    const calculateTotalDiscount = () => {
        return cart?.data?.reduce((total, item) => {
            return total + (Number(item.product.discount) * Number(item.quantity));
        }, 0).toFixed(2);
    }

    console.log(form)

    const handleEdit = (data) => {
        console.log("data", data)
        setForm({
            house_no: data?.house_no,
            address_type: data?.address_type,
            area: data?.area,
            city: data?.city,
            house_name: data?.house_name,
            id: data?.id,
            landmark: data?.landmark,
            pincode: data?.pincode,
            state: data?.state,
            street_road: data?.street_road,
        })
        setAction("edit")
        setAddress(true)
    }

    return (
        <>
            <AlertMessage open={isOpen} message={message} state={setIsOpen} />

            {


                <section className="checkout pb-30">
                    <div className="container container-lg">

                        <div className="row">
                            <div className="col-xl-9 col-lg-8">
                                {
                                    !addAddress ?
                                        <section className="popular-products pt-80 pb-80">
                                            <div className="container container-lg">
                                                <div className="border border-gray-100 p-24 rounded-16">
                                                    <div className="section-heading mb-24">
                                                        <div className="flex-between flex-wrap gap-8">
                                                            <h5 className="mb-0">Select Address</h5>
                                                            <div className="flex-align gap-16">
                                                                <button
                                                                    disabled={address?.data?.length >= 3}
                                                                    onClick={() => {
                                                                        setAddress(!addAddress); setAction(null)
                                                                    }}
                                                                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                                                >
                                                                    Add Address
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row gy-4">
                                                        {
                                                            address && address?.data?.map((data, index) => (
                                                                <div key={index} className="col-xxl-4 col-xl-4 col-sm-6 col-xs-12">
                                                                    <div
                                                                        onClick={() => setSelectedIndex(index)}
                                                                        style={{ border: selectedIndex === index ? "4px solid #299e60" : "1px solid grey", cursor: "pointer" }}
                                                                        className="product-card h-100 d-flex gap-16 p-8 border-x border-gray-100-x hover-border-main-600 rounded-16 position-relative transition-2">
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                top: "10px",
                                                                                right: "10px"
                                                                            }}>
                                                                            <div className='d-flex'>
                                                                                <div onClick={() => handleEdit(data)}>
                                                                                    <EditIcon sx={{ fontSize: "20px" }} />
                                                                                </div>
                                                                                <div onClick={() => handleDeleteAddress(data)}>
                                                                                    <DeleteIcon sx={{ fontSize: "20px" }} />
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        <div className="product-card__content flex-grow-1">
                                                                            <h6 className="title text-lg fw-semibold mb-12">
                                                                                <span className="text-gray-600 text-sm mb-4">
                                                                                    {data?.house_no} ({data?.address_type})
                                                                                </span><br />
                                                                                <div
                                                                                    to="/product-details"
                                                                                    className="link text-line-2"
                                                                                    tabIndex={0}
                                                                                >
                                                                                    {data?.house_name}
                                                                                </div>
                                                                            </h6>
                                                                            <span className="text-gray-600 text-sm mb-4">
                                                                                {data?.landmark},{data?.street_road}
                                                                            </span><br />
                                                                            <span className="text-gray-600 text-sm mb-4">
                                                                                {data?.area} ,{data?.city}
                                                                            </span><br />
                                                                            <span className="text-gray-600 text-sm mb-4">
                                                                                {data?.state}
                                                                            </span>-
                                                                            <span className="text-gray-600 text-sm mb-4">
                                                                                {data?.pincode}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }




                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        :
                                        <form action="#" className="pe-xl-5 p-24" onSubmit={action === "edit" ? handleUpdate : handleSubmit}>
                                            <div className="row gy-3 border p-24 rounded-16">
                                                <div className="col-sm-4 col-xs-4">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Full Name{" "}
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <input
                                                        value={user?.data?.name}
                                                        type="text"
                                                        className="common-input px-16"
                                                        placeholder=""
                                                        disabled
                                                    />
                                                </div>
                                                <div className="col-sm-4 col-xs-4">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Email{" "}
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <input
                                                        value={user?.data?.email}
                                                        type="text"
                                                        className="common-input px-16"
                                                        placeholder=""
                                                        disabled
                                                    />
                                                </div>

                                                <div className="col-sm-4 col-xs-4">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Mobile No.{" "}
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <input
                                                        value={user?.data?.mobile_number}
                                                        type="text"
                                                        className="common-input px-16"
                                                        placeholder=""
                                                        disabled
                                                    />
                                                </div>
                                                <div className="col-sm-4 col-xs-4">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Address Type{" "}
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <div className="form-check common-check common-radio">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="color"
                                                            required
                                                            id="brand1"
                                                            checked={form?.address_type === "office" ? true : false}
                                                            onClick={(e) => setForm({ ...form, address_type: "office" })}
                                                        />
                                                        <label className="form-check-label" htmlFor="brand1">
                                                            Office
                                                        </label>
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="color"
                                                            id="brand2"
                                                            required
                                                            checked={form?.address_type === "home" ? true : false}
                                                            onClick={(e) => setForm({ ...form, address_type: "home" })}

                                                        />
                                                        <label className="form-check-label" htmlFor="brand2">
                                                            Home
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-xs-4">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        House No.{" "}
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="common-input px-16"
                                                        placeholder=""
                                                        required
                                                        value={form?.house_no}
                                                        onChange={(e) => setForm({ ...form, house_no: e.target.value })}

                                                    />
                                                </div>
                                                <div className="col-sm-4 col-xs-4">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Tenament Name / Apartment.{" "}
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="common-input px-16"
                                                        placeholder=""
                                                        required
                                                        value={form?.house_name}
                                                        onChange={(e) => setForm({ ...form, house_name: e.target.value })}

                                                    />
                                                </div>
                                                <div className="col-sm-4 col-xs-4">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Street
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="common-input px-16"
                                                        required
                                                        placeholder=""
                                                        value={form?.street_road}

                                                        onChange={(e) => setForm({ ...form, street_road: e.target.value })}

                                                    />
                                                </div>
                                                <div className="col-sm-4 col-xs-4">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Landmark
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="common-input px-16"
                                                        placeholder=""

                                                        value={form?.landmark}

                                                        onChange={(e) => setForm({ ...form, landmark: e.target.value })}

                                                    />
                                                </div>
                                                <div className="col-sm-4 col-xs-4">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Area
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="common-input px-16"
                                                        placeholder=""
                                                        required
                                                        value={form?.area}

                                                        onChange={(e) => setForm({ ...form, area: e.target.value })}

                                                    />
                                                </div>

                                                <div className="col-sm-4 col-xs-4">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        State
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    {/* <input
                                                        type="text"
                                                        className="common-input px-16"
                                                        placeholder=""
                                                        required
                                                        value={form?.state}
                                                        onChange={(e) => setForm({ ...form, state: e.target.value })}

                                                    /> */}

                                                    <StateSelect
                                                        countryid={101}
                                                        onChange={(e) => {
                                                            setstateid(e.id);
                                                            setForm({ ...form, state: e.name })
                                                        }}
                                                        placeHolder="Select State"
                                                    />
                                                </div>
                                                <div className="col-sm-4 col-xs-4">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        City
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <CitySelect
                                                        countryid={101}
                                                        stateid={stateid}
                                                        onChange={(e) => {
                                                            console.log(e);
                                                            setForm({ ...form, city: e.name })

                                                        }}
                                                        placeHolder="Select City"
                                                    />
                                                </div>
                                                <div className="col-sm-4 col-xs-4">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Pincode
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="common-input px-16"
                                                        placeholder=""
                                                        required
                                                        value={form?.pincode}
                                                        onChange={(e) => setForm({ ...form, pincode: e.target.value })}

                                                    />
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                                    <button
                                                        type="submit"
                                                        className="btn btn-main  py-18  rounded-8 "
                                                    >
                                                        Save Address
                                                    </button>
                                                </div>
                                                {
                                                    address?.data?.length !== 0 ?
                                                        <div style={{ cursor: "pointer" }} onClick={() => setAddress(false)}>
                                                            <i className="ph ph-arrow-left mr-10"></i>
                                                            <span className='ml-10' style={{ marginLeft: "1rem" }}>Back</span>
                                                        </div>
                                                        :
                                                        <></>
                                                }

                                            </div>
                                        </form>
                                }

                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="checkout-sidebar">
                                    {/* <div className="bg-color-three rounded-8 p-24 text-center">
                                        <span className="text-gray-900 text-xl fw-semibold">
                                            Your Orders
                                        </span>
                                    </div> */}
                                    <div className="border border-gray-100 rounded-8 px-24 py-40 mt-24">
                                        <div className="mb-32 pb-32 border-bottom border-gray-100 flex-between gap-8">
                                            <span className="text-gray-900 fw-medium text-xl font-heading-two">
                                                Product
                                            </span>
                                            <span className="text-gray-900 fw-medium text-xl font-heading-two">
                                                Total
                                            </span>
                                        </div>
                                        {
                                            cart && cart?.data?.map((data, index) => (
                                                <div key={index} className="flex-between gap-24 mb-32">
                                                    <div className="flex-align gap-12">
                                                        <span className="text-gray-900 fw-normal text-sm font-heading-two w-144-x">
                                                            {data?.product?.product_name}
                                                        </span>
                                                        <span className="text-gray-900 fw-normal text-sm font-heading-two">
                                                            <i className="ph-bold ph-x" />
                                                        </span>
                                                        <span className="text-gray-900 fw-semibold text-sm font-heading-two">
                                                            {data?.quantity}
                                                        </span>
                                                    </div>
                                                    <span className="text-gray-900 fw-bold text-sm font-heading-two">
                                                        ₹{(Number(data?.product?.final_price) * Number(data?.quantity)).toFixed(2)}
                                                    </span>
                                                </div>
                                            ))
                                        }


                                        <div className="border-top border-gray-100 pt-30  mt-30">

                                            <div className="mb-0 flex-between gap-8">
                                                <span className="text-gray-900 font-heading-two text-xl fw-semibold">
                                                    Total
                                                </span>
                                                <span className="text-gray-900 font-heading-two text-md fw-bold">
                                                    ₹{(calculateTotal()) || 0}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <button
                                        disabled={!address?.data?.length ? true : false}
                                        className="btn btn-main mt-40 py-18 w-100 rounded-8 mt-56"
                                    >
                                        Place Order
                                    </button> */}
                                    <RazorpayBtn
                                        disabled={(!address?.data?.length || addAddress) ? true : false}
                                        title={"Place Order"}
                                        user_id={user?.data?.id}
                                        total_amount={Number(props?.subtotal)}
                                        cgst_amount={cart?.tax?.cgst}
                                        sgst_amount={cart?.tax?.sgst}
                                        total_gst_amount={cart?.tax?.gst}
                                        address_id={address?.data?.[selectedIndex]?.id}
                                        promocode_id={null}
                                        discount_price={Number(props?.discount)}
                                        // discount_price={calculateTotalDiscount()}
                                        paid_amount={calculateTotal()}
                                        shipping_price={0}
                                        promocode_discount_price={0}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            }


        </>
    )
}
