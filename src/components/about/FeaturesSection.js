import React from "react";

const FeaturesSection = () => {
    return (
        <section className='py-80'>
            <div className='container'>
                <div className='section-heading text-center mx-auto'>
                    <h5 className=''>Nourishment is our mission</h5>
                    <span className='text-gray-600'>
                        We strive for "Nourishment"—enhancing soil fertility, boosting crop yields, and ensuring sustainable agriculture. We strive to provide high-quality fertilizers that enrich the land while protecting the environment for future generations.
                    </span>
                </div>
                <div className='row gy-4 justify-content-center'>
                    <div className='col-lg-4 col-sm-6'>
                        <div className='text-center d-flex flex-column justify-content-center align-items-center'>
                            <div style={{ width: '8rem', height: '8rem' }}>
                                <img src="assets/images/about/variety.png" alt="Variety" />
                            </div>
                            <h6 className='my-28'>Wide Variety</h6>
                            <p className='text-gray-600 max-w-392 mx-auto'>
                                Explore a wide variety of high-quality fertilizers, including organic, liquid, and granular options for optimal plant growth.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6'>
                        <div className='text-center d-flex flex-column justify-content-center align-items-center'>
                            <div style={{ width: '8rem', height: '8rem' }}>
                                <img src="assets/images/about/quality.png" alt="Quality" />
                            </div>
                            <h6 className='my-28'>Quality Assurance</h6>
                            <p className='text-gray-600 max-w-392 mx-auto'>
                                Discover a premium selection of high-quality fertilizers, including organic, liquid, and slow-release options for healthier, thriving plants.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6'>
                        <div className='text-center d-flex flex-column justify-content-center align-items-center'>
                            <div style={{ width: '8rem', height: '8rem' }}>
                                <img src="assets/images/about/price.png" alt="Budget" />
                            </div>
                            <h6 className='my-28'>Budget Friendly</h6>
                            <p className='text-gray-600 max-w-392 mx-auto'>
                                Find a wide range of high-quality, budget-friendly fertilizers, including organic, liquid, and slow-release options for healthy plant growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;