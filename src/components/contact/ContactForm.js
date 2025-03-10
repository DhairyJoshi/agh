import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import AlertMessage from '../common/AlertMessage';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthAction from '../../redux/actions/AuthAction'
import Loading from '../common/Loading';

export default function ContactForm() {

    const [form, setForm] = useState(null)
    const user = JSON.parse(localStorage.getItem('user') || null)
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch()
    const { submitEnquiry } = bindActionCreators(AuthAction, dispatch)
    const [loader, setLoader] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoader(true)
        form.user_id = user?.data?.id
        const resData = await submitEnquiry(form)
        console.log(resData)
        if (resData?.statuscode === 200) {
            setIsOpen(true)
            setMessage({ ...message, message: resData?.message, flag: "success" })
            setLoader(false)
            setForm(null)
        }
        else {
            setIsOpen(true)
            setMessage({ ...message, message: resData?.message, flag: "error" })
            setLoader(false)

        }

    }

    return (
        <section className="contact pt-10 pb-20">
            <div className="container container-lg">
                <div className="row gy-5">
                    <div className="col-lg-8">
                        <div className="contact-box border border-gray-100 rounded-16 px-24 py-40">
                            <form onSubmit={handleSubmit}>
                                <h6 className="mb-32">Make Custom Inquiry</h6>
                                <div className="row gy-4">
                                    <div className="col-sm-6 col-xs-6">
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
                                            value={user?.data?.name || null}
                                            placeholder="Full name"
                                        />
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
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
                                            value={user?.data?.email || null}

                                        />
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
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
                                            value={user?.data?.mobile_number || null}
                                        />
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
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
                                            value={form?.subject || null}

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
                                            value={form?.message || null}
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
                    <div className="col-lg-4">
                        <div className="contact-box border border-gray-100 rounded-16 px-24 py-40">
                            <h6 className="mb-48">Get In Touch</h6>
                            <div className="flex-align gap-16 mb-16">
                                <span className="w-40 h-40 flex-center rounded-circle border border-gray-100 text-main-600 text-2xl flex-shrink-0">
                                    <i className="ph ph-phone-call" />
                                </span>
                                <Link
                                    to="/tel:+00123456789"
                                    className="text-md text-gray-900 hover-text-main-600"
                                >
                                    +91 9104592065
                                </Link>
                            </div>
                            <div className="flex-align gap-16 mb-16">
                                <span className="w-40 h-40 flex-center rounded-circle border border-gray-100 text-main-600 text-2xl flex-shrink-0">
                                    <i className="ph ph-envelope" />
                                </span>
                                <Link
                                    to="/mailto:support24@marketpro.com"
                                    className="text-md text-gray-900 hover-text-main-600"
                                >
                                    osmagrimart@gmail.com
                                </Link>
                            </div>
                            <div className="flex-align gap-16 mb-0">
                                <span className="w-40 h-40 flex-center rounded-circle border border-gray-100 text-main-600 text-2xl flex-shrink-0">
                                    <i className="ph ph-map-pin" />
                                </span>
                                <span className="text-md text-gray-900 ">

                                    S.Y. NO 215/C, AYODHAYA X ROAD,
                                    KANDLAKOYA, MEDCHAL, Rangareddi,
                                    Telangana, India, 501401
                                </span>
                            </div>
                        </div>
                        <div className="mt-24 flex-align flex-wrap gap-16">
                            <Link
                                to="#"
                                className="bg-neutral-600 hover-bg-main-600 rounded-8 p-10 px-16 flex-between flex-wrap gap-8 flex-grow-1"
                            >
                                <span className="text-white fw-medium">Get Support On Call</span>
                                <span className="w-36 h-36 bg-main-600 rounded-8 flex-center text-xl text-white">
                                    <i className="ph ph-headset" />
                                </span>
                            </Link>
                            <Link
                                to="#"
                                className="bg-neutral-600 hover-bg-main-600 rounded-8 p-10 px-16 flex-between flex-wrap gap-8 flex-grow-1"
                            >
                                <span className="text-white fw-medium">Get Direction</span>
                                <span className="w-36 h-36 bg-main-600 rounded-8 flex-center text-xl text-white">
                                    <i className="ph ph-map-pin" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
