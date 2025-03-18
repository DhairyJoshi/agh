import React from 'react'

const AboutContent = () => {
    return (
        <div className='container container-lg py-48'>
            <div className='text-center'>
                <h3 style={{ color: '#299E60' }}>Nourishment is our mission</h3>
                <span>Our mission is "Nourishment"—enhancing soil fertility, boosting crop yields, and ensuring sustainable agriculture. We strive to provide high-quality fertilizers that enrich the land while protecting the environment for future generations.</span>
            </div>

            <div className='d-flex flex-wrap justify-content-between align-items-center mt-80'>
                <div className='d-flex flex-column justify-content-center align-items-center m-16'>
                    <div className='mb-12' style={{ width: '9rem', height: '9rem' }}>
                        <img src="assets/images/about/variety.png" alt="Variety" />
                    </div>
                    <span className='text-center fs-5'>Widest Variety</span>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center m-16'>
                    <div className='mb-12' style={{ width: '9rem', height: '9rem' }}>
                        <img src="assets/images/about/quality.png" alt="Quality" />
                    </div>
                    <span className='text-center fs-5'>Quality Assurance</span>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center m-16'>
                    <div className='mb-12' style={{ width: '9rem', height: '9rem' }}>
                        <img src="assets/images/about/price.png" alt="Budget" />
                    </div>
                    <span className='text-center fs-5'>Budget Friendly</span>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center m-16'>
                    <div className='mb-12' style={{ width: '9rem', height: '9rem' }}>
                        <img src="assets/images/about/source.png" alt="Source" />
                    </div>
                    <span className='text-center fs-5'>Locally Sourced</span>
                </div>
            </div>

            <div className='mt-60'>
                <h2 style={{ color: '#299E60' }} className='text-center'>Our Vision</h2>
                <div className='d-flex flex-row align-items-center justify-content-center mt-40'>
                    <div style={{ width: '30%', height: 'auto', marginRight: '4rem' }}>
                        <img src="assets/images/about/vision.png" alt="Vision" />
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-start'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                            <span className='fs-3'>Sustainable Growth</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                            <span className='fs-3'>Innovative Solutions</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                            <span className='fs-3'>Global Impact</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                            <span className='fs-3'>Farmer-Centric Approach</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                            <span className='fs-3'>Environmental Responsibility</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-60'>
                <h2 style={{ color: '#299E60' }} className='text-center'>Our Mission</h2>
                <div className='d-flex flex-row-reverse align-items-center justify-content-center mt-40'>
                    <div style={{ width: '30%', height: 'auto', marginLeft: '4rem' }}>
                        <img src="assets/images/about/target.png" alt="Mission" />
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-start'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                            <span className='fs-3'>Quality Assurance</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                            <span className='fs-3'>Research & Development</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                            <span className='fs-3'>Farmer Support</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                            <span className='fs-3'>Sustainability Commitment</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                            <span className='fs-3'>Market Expansion</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-60'>
                <h3 className=''>Why Choose AGH?</h3>
                <div className='d-flex justify-content-start align-items-center mb-10'>
                    <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                    <div className='d-flex flex-column'>
                        <span className='fs-3'>Innovative Excellence:</span>
                        <span className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero tempore enim quia pariatur ullam!</span>
                    </div>
                </div>

                <div className='d-flex justify-content-start align-items-center mb-10'>
                    <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                    <div className='d-flex flex-column'>
                        <span className='fs-3'>High-Quality Fertilizers:</span>
                        <span className='fs-5'>We provide premium-grade fertilizers that enhance crop yield, soil fertility, and long-term agricultural sustainability.</span>
                    </div>
                </div>

                <div className='d-flex justify-content-start align-items-center mb-10'>
                    <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                    <div className='d-flex flex-column'>
                        <span className='fs-3'>Eco-Friendly Solutions</span>
                        <span className='fs-5'>Our fertilizers are designed to minimize environmental impact, using biodegradable and organic components to promote sustainable farming.</span>
                    </div>
                </div>

                <div className='d-flex justify-content-start align-items-center mb-10'>
                    <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                    <div className='d-flex flex-column'>
                        <span className='fs-3'>Innovative Research & Development:</span>
                        <span className='fs-5'>We invest in advanced agricultural research to develop cutting-edge fertilizers tailored to diverse soil types and crop needs.</span>
                    </div>
                </div>

                <div className='d-flex justify-content-start align-items-center mb-10'>
                    <i className="ph ph-arrow-fat-line-right fs-3 m-10"></i>
                    <div className='d-flex flex-column'>
                        <span className='fs-3'>Farmer-Centric Approach:</span>
                        <span className='fs-5'>We prioritize farmers by offering expert guidance, training, and customized solutions to improve productivity and profitability.</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutContent
