import React from "react";

const Mission = () => {
    return (
        <section className='step py-40'>
            <div className='position-relative z-1'>
                {/* <img
                    src='assets/images/shape/curve-line-shape.png'
                    alt=''
                    className='position-absolute top-0 inset-inline-end-0 z-n1 me-60 d-lg-block d-none'
                /> */}
                <div className='container container-lg'>
                    <div className='row gy-4'>
                        {/* <div className='col-lg-6'>
                            <div className='text-center'>
                                <img src='assets/images/thumbs/steps.png' alt='' />
                            </div>
                        </div> */}
                        <div className='col-lg-6 py-60 px-80'>
                            <div className='w-100 h-100 bg-secondary rounded-5'></div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='step-content'>
                                <div className='section-heading ms-auto text-start'>
                                    <h2 className=''>Our Mission</h2>
                                    <span className='text-gray-600'>
                                        Our Mission is to provide high-quality, budget-friendly fertilizers, ensuring sustainable growth and healthier plants for every gardener.
                                    </span>
                                </div>
                                <div className='d-flex flex-column align-items-start gap-56'>
                                    <div className='d-flex align-items-center gap-32'>
                                        <div className='w-90 h-90 flex-center bg-main-100 rounded-circle'>
                                            <h6 className='mb-0 w-60 h-60 bg-main-600 text-white d-flex align-items-center justify-content-center rounded-circle border border-5 border-white fw-medium'>
                                                01
                                            </h6>
                                        </div>
                                        <div className='text-start'>
                                            <h5 className='mb-8'>Quality Assurance</h5>
                                            <p className='text-gray-600'>
                                                Ensuring premium quality through rigorous testing and standards.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-32'>
                                        <div className='w-90 h-90 flex-center bg-main-100 rounded-circle'>
                                            <h6 className='mb-0 w-60 h-60 bg-main-600 text-white d-flex align-items-center justify-content-center rounded-circle border border-5 border-white fw-medium'>
                                                02
                                            </h6>
                                        </div>
                                        <div className='text-start'>
                                            <h5 className='mb-8'>Research & Development</h5>
                                            <p className='text-gray-600'>
                                                {" "}
                                                Advancing innovation through dedicated research and sustainable development.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-32'>
                                        <div className='w-90 h-90 flex-center bg-main-100 rounded-circle'>
                                            <h6 className='mb-0 w-60 h-60 bg-main-600 text-white d-flex align-items-center justify-content-center rounded-circle border border-5 border-white fw-medium'>
                                                03
                                            </h6>
                                        </div>
                                        <div className='text-start'>
                                            <h5 className='mb-8'>Farmer Support</h5>
                                            <p className='text-gray-600'>
                                                Empowering farmers with expert guidance, resources, and sustainable solutions.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-32'>
                                        <div className='w-90 h-90 flex-center bg-main-100 rounded-circle'>
                                            <h6 className='mb-0 w-60 h-60 bg-main-600 text-white d-flex align-items-center justify-content-center rounded-circle border border-5 border-white fw-medium'>
                                                04
                                            </h6>
                                        </div>
                                        <div className='text-start'>
                                            <h5 className='mb-8'>Sustainable Commitment</h5>
                                            <p className='text-gray-600'>
                                                Dedicated to eco-friendly practices for a greener future.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-32'>
                                        <div className='w-90 h-90 flex-center bg-main-100 rounded-circle'>
                                            <h6 className='mb-0 w-60 h-60 bg-main-600 text-white d-flex align-items-center justify-content-center rounded-circle border border-5 border-white fw-medium'>
                                                05
                                            </h6>
                                        </div>
                                        <div className='text-start'>
                                            <h5 className='mb-8'>Market Expansion</h5>
                                            <p className='text-gray-600'>
                                                Expanding globally with innovative solutions for sustainable growth.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;