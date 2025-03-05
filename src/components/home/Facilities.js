import React from 'react'

export default function Facilities() {
    return (
        <section className="shipping mb-24" id="shipping">
            <div className="container container-lg">
                <div className="row gy-4">
                    <div className="col-xxl-6 col-sm-6">
                        <div
                            style={{
                                minHeight: "120px",
                                maxHeight: "120px"
                            }}
                            className="shipping-item flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2"
                        >
                            <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                                <i className="ph ph-handshake" />
                            </span>
                            <div className="">
                                <h6 className="mb-0">Exclusive Deals</h6>
                                <span className="text-sm text-heading">
                                    Unlock special discounts.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-sm-6">
                        <div
                            style={{
                                minHeight: "120px",
                                maxHeight: "120px",
                                padding: "10px"
                            }}
                            className="shipping-item flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                            <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                                <i className="ph-fill ph-hand-heart" />
                            </span>
                            <div className="">
                                <h6 className="mb-0"> 100% Satisfaction</h6>
                                <span className="text-sm text-heading">
                                    satisfaction with every purchase.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-sm-6">
                        <div
                            style={{
                                minHeight: "120px",
                                maxHeight: "120px"
                            }}
                            className="shipping-item flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                            <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                                <i className="ph-fill ph-credit-card" />
                            </span>
                            <div className="">
                                <h6 className="mb-0"> Secure Payments</h6>
                                <span className="text-sm text-heading">
                                    Safe & secure payment options.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-sm-6">
                        <div
                            style={{
                                minHeight: "120px",
                                maxHeight: "120px"
                            }}
                            className="shipping-item flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                            <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                                <i className="ph-fill ph-chats" />
                            </span>
                            <div className="">
                                <h6 className="mb-0"> 24/7 Support</h6>
                                <span className="text-sm text-heading">
                                    We're here to help, anytime!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
