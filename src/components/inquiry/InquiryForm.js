import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';

export default function InquiryForm() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { GET_ALL_PRODUCTS } = bindActionCreators(actionCreators, dispatch);
    const products = useSelector((state) => state.productReducer.products);

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(GET_ALL_PRODUCTS());
        }
    }, [dispatch, products]);

    const product = products?.find((p) => p.id === parseInt(id));

    const [form, setForm] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        // setLoader(true)
        // form.user_id = user?.data?.id
        // const resData = await submitEnquiry(form)
        // console.log(resData)
        // if (resData?.statuscode === 200) {
        //     setIsOpen(true)
        //     setMessage({ ...message, message: resData?.message, flag: "success" })
        //     setLoader(false)
        //     setForm(null)
        // }
        // else {
        //     setIsOpen(true)
        //     setMessage({ ...message, message: resData?.message, flag: "error" })
        //     setLoader(false)

        // }
    }

    return (
        <section className="contact pb-20">
            <div className="container container-lg">
                <div className="row gy-5">
                    <div>
                        <div className="contact-box border border-gray-100 rounded-16 px-24 py-20">
                            <form onSubmit={handleSubmit}>
                                <h6 className="mb-32">Make Product Inquiry</h6>
                                <div className="row gy-4">
                                    <div className="col-sm-4 col-xs-4">
                                        <label
                                            htmlFor="p_id"
                                            className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                        >
                                            Product ID
                                            <span className="text-danger text-xl line-height-1">*</span>{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="common-input px-16"
                                            id="p_id"
                                            placeholder="Product ID*"
                                            value={product?.id || null}
                                            disabled={product?.id !== null}
                                            style={{
                                                borderRadius: '5px',
                                                fontWeight: '200',
                                                outline: 'none',
                                                width: '100%',
                                                padding: '17px 24px',
                                                backgroundColor: 'transparent !important',
                                                border: '1px solid var(--gray-100)',
                                                color: 'hsl(var(--black))',
                                                lineHeight: '1'
                                            }}  
                                        />
                                    </div>
                                    <div className="col-sm-4 col-xs-4">
                                        <label
                                            htmlFor="p_title"
                                            className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                        >
                                            Product Title
                                            <span className="text-danger text-xl line-height-1">*</span>{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="common-input px-16"
                                            id="p_title"
                                            placeholder="Product Title*"
                                            value={product?.product_name || null}
                                            disabled={product?.product_name !== null}
                                            style={{
                                                borderRadius: '5px',
                                                fontWeight: '200',
                                                outline: 'none',
                                                width: '100%',
                                                padding: '17px 24px',
                                                backgroundColor: 'transparent !important',
                                                border: '1px solid var(--gray-100)',
                                                color: 'hsl(var(--black))',
                                                lineHeight: '1'
                                            }}      
                                        />
                                    </div>
                                    <div className="col-sm-4 col-xs-4">
                                        <label
                                            htmlFor="p_category"
                                            className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                        >
                                            Product Category
                                            <span className="text-danger text-xl line-height-1">*</span>{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="common-input px-16"
                                            id="p_category"
                                            placeholder="Product Brand*"
                                            value={product?.category_id?.category_name || null}
                                            disabled={product?.category_id?.category_name !== null}
                                            style={{
                                                borderRadius: '5px',
                                                fontWeight: '200',
                                                outline: 'none',
                                                width: '100%',
                                                padding: '17px 24px',
                                                backgroundColor: 'transparent !important',
                                                border: '1px solid var(--gray-100)',
                                                color: 'hsl(var(--black))',
                                                lineHeight: '1'
                                            }}  
                                        />
                                    </div>
                                    <div className="col-sm-4 col-xs-4">
                                        <label
                                            htmlFor="name"
                                            className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                        >
                                            Full Name{" "}
                                            <span className="text-danger text-xl line-height-1">*</span>{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="common-input px-16"
                                            id="name"
                                            placeholder="Full name"
                                        />
                                    </div>
                                    <div className="col-sm-4 col-xs-4">
                                        <label
                                            htmlFor="email"
                                            className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                        >
                                            Email Address{" "}
                                            <span className="text-danger text-xl line-height-1">*</span>{" "}
                                        </label>
                                        <input
                                            type="email"
                                            className="common-input px-16"
                                            id="email"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div className="col-sm-4 col-xs-4">
                                        <label
                                            htmlFor="phone"
                                            className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                        >
                                            Phone Number
                                            <span className="text-danger text-xl line-height-1">*</span>{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="common-input px-16"
                                            id="phone"
                                            placeholder="Phone Number*"
                                        />
                                    </div>
                                    <div className="col-sm-12 col-xs-12">
                                        <label
                                            htmlFor="subject"
                                            className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                        >
                                            Subject
                                            <span className="text-danger text-xl line-height-1">
                                                *
                                            </span>{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="common-input px-16"
                                            id="subject"
                                            placeholder="Subject"
                                            required
                                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-sm-12">
                                        <label
                                            htmlFor="message"
                                            className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                        >
                                            Message
                                            <span className="text-danger text-xl line-height-1">
                                                *
                                            </span>{" "}
                                        </label>
                                        <textarea
                                            className="common-input px-16"
                                            id="message"
                                            placeholder="Type your message"
                                            defaultValue={""}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}

                                            required
                                        />
                                    </div>
                                    <div className="col-sm-12 mt-32">
                                        <button
                                            type="submit"
                                            className="btn btn-main py-18 px-32 rounded-8"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}