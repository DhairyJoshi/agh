import React, { useState } from 'react'
import logo from '../../assets/images/favicon.png'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CheckoutAction from '../../redux/actions/CheckoutAction'
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constant/routes';
import Loading from '../common/Loading';

export default function RazorpayBtn(props) {
    const dispatch = useDispatch()
    const { createOrder } = bindActionCreators(CheckoutAction, dispatch)
    console.log(props)
    const navigation = useNavigate()
    const [loader, setLoader] = useState(false)

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async () => {
        const res = await loadRazorpayScript();

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        const options = {
            key: 'rzp_live_hbPHTo3H7d1qUg',  // Add your Razorpay key ID here
            // key: 'rzp_test_8m3Fho730KwaLV',  // Add your Razorpay key ID here
            amount: Number(props?.paid_amount) * 100,  // Amount is in paise (50000 paise = 500 INR)
            currency: 'INR',
            name: 'OSM AGRI MART',
            description: 'Transaction for placing an order',
            image: logo,  // Optional: add your logo here
            handler: async function (response) {
                // alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                console.log(response);
                setLoader(true)
                const userObj = {
                    user_id: props?.user_id,
                    total_amount: props?.total_amount,
                    cgst_amount: props?.cgst_amount,
                    sgst_amount: props?.sgst_amount,
                    total_gst_amount: props?.total_gst_amount,
                    address_id: props?.address_id,
                    promocode_id: props?.promocode_id,
                    discount_price: props?.discount_price,
                    paid_amount: Number(props?.paid_amount),
                    shipping_price: props?.shipping_price,
                    promocode_discount_price: props?.promocode_discount_price,
                    payment_id: response?.razorpay_payment_id
                }
                const resData = await createOrder(userObj)
                console.log("resData", resData)
                if (resData?.statuscode === 200) {
                    setLoader(false)

                    navigation(ROUTES.paymentSuccess, { state: response })
                }
                else {
                    alert("Error in api")
                }
            },
            prefill: {
                name: 'Harshil Patel',
                email: 'pharshil5603@gmail.com',
                contact: '9104592065',
            },
            theme: {
                color: '#299e60',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };



    return (
        <div>
            <Loading open={loader} setOpen={setLoader} />

            <button
                disabled={props?.disabled}
                className="btn btn-main mt-40 py-18 w-100 rounded-8 mt-56"
                onClick={displayRazorpay}
            >
                {props?.title}
            </button>
        </div>
    )
}
