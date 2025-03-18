import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className='promo-three pt-120   overflow-hidden'>
            <div className='container container-lg'>
                    <div>
                        <h3>About Us</h3>
                        <div
                            className='promo-three-item bg-img rounded-16 overflow-hidden d-flex justify-content-start align-items-center'
                            style={{
                                height: '80vh',
                                paddingLeft: '3rem',
                                backgroundImage: `url('assets/images/bg/about-bg.jpg')`,
                            }}
                        >
                            <div className='text-start' style={{ marginRight: '40%' }}>
                                <h2 className='text-white fw-medium mb-24'>
                                    Nourishing Growth, Enriching Soil: Your Trusted Fertilizer Partner
                                </h2>
                                <span className='text-white mb-24'>
                                    At AGH, we are committed to revolutionizing agriculture with high-quality, sustainable fertilizers that enhance soil health and maximize crop yields. With a passion for innovation and a deep understanding of farmers' needs, we provide nutrient-rich solutions tailored for every soil type and farming practice. Our mission is to empower farmers with eco-friendly, cost-effective fertilizers that ensure bountiful harvests while preserving the environment. Partner with us to cultivate a greener, more productive future!
                                </span>
                                <Link
                                    to='/about'
                                    className='btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48'
                                    tabIndex={0}
                                >
                                    Know More
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default About;