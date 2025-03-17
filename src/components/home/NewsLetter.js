import React from 'react'
import imageBg from '../../assets/images/agrochemicals.png'

export default function NewsLetter() {
    return (
        <div className="newsletter py-40">
            <div className="container container-lg">
                <div className="newsletter-box position-relative rounded-16 flex-align gap-16 flex-wrap z-1">
                    <img
                        src="assets/images/bg/newsletter-bg.png"
                        alt=""
                        className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6"
                    />
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="">
                                <h2 className="text-white mb-12">
                                    Don't Miss Out on best Deals
                                </h2>
                                {/* <p className="text-white h5 mb-0">
                                    SING UP FOR THE UPDATE NEWSLETTER
                                </p> */}
                                <form action="#" className="position-relative mt-40">
                                    <input
                                        style={{ color: 'white' }}
                                        type="text"
                                        className="form-control common-input rounded-pill text-white py-22 px-16 pe-144"
                                        placeholder="Your email address..."
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-main-two rounded-pill position-absolute top-50 translate-middle-y inset-inline-end-0 me-10"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-6 text-center d-xl-block d-none">
                            <img src={imageBg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
