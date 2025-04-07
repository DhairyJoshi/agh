import React, { useRef } from "react";
import Slider from "react-slick";

const Testimonial = () => {
    const mainSliderRef = useRef(null);
    const thumbSliderRef = useRef(null);

    const NextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            type='button'
            id='testi-next'
            style={window.innerWidth < 768 ? { right: '60px' , marginBottom: '10px'} : {}}
            className='slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 text-white transition-1'
        >
            <i className='ph ph-caret-right'></i>
        </button>
    );

    const PrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            type='button'
            id='testi-prev'
            style={window.innerWidth < 768 ? { left: '60px', marginBottom: '10px' } : {}}
            className='slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 text-white transition-1'
        >
            <i className='ph ph-caret-left'></i>
        </button>
    );

    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: thumbSliderRef.current,
        dots: false,
        arrows: false,
        fade: true,
        cssEase: "linear",
    };

    const thumbSliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: mainSliderRef.current,
        dots: false,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        speed: 900,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768, // mobile and small tablets
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const testimonialsData = [
        {
            name: "Best Organic Fertilizer",
            presentor: "National AgriTech Conference 2023",
            desc: "Recognized for outstanding innovation in eco-friendly fertilizer solutions that enhance crop yield while preserving soil health.",
            img: "assets/images/thumbs/testimonials-img1.png",
        },
        {
            name: "Sustainability Award",
            presentor: "Green Farming Awards 2022",
            desc: "Awarded for leading sustainable agricultural practices through the use of biodegradable and nutrient-rich fertilizers.",
            img: "assets/images/thumbs/testimonials-img2.png",
        },
        {
            name: "Top Bio-Fertilizer Exporter",
            presentor: "International Agri Export Summit",
            desc: "Honored for significant contributions to global agriculture by exporting high-quality organic fertilizers across 15 countries.",
            img: "assets/images/thumbs/testimonials-img3.png",
        },
        {
            name: "Soil Nutrition Innovation",
            presentor: "Global Farming Forum 2023",
            desc: "Celebrated for developing cutting-edge fertilizer blends that promote healthier soil ecosystems and long-term farm productivity.",
            img: "assets/images/thumbs/testimonials-img4.png",
        },
        {
            name: "Farmer’s Choice Award",
            presentor: "AgroMarket Survey 2024",
            desc: "Voted the most trusted and effective fertilizer by thousands of farmers for boosting crop quality and harvest consistency.",
            img: "assets/images/thumbs/testimonials-img2.png",
        },
    ];

    return (
        <section
            className='testimonials pt-20 pb-90 bg-neutral-600 bg-img overflow-hidden'
            style={{ backgroundImage: "url('assets/images/bg/pattern-two.png')" }}
        >
            <div className='container testimonial_container-lg'>
                <div className='row gy-4 align-items-center'>
                    <div className='col-xl-1'>
                        <div className='section-heading mb-0 d-flex flex-column align-items-center writing-mode'>
                            <p className='text-white' style={window.innerWidth < 768 ? { textAlign: 'center', marginBottom: '20px' } : {}}>
                                Our proudest moments that showcase passion, progress, and purpose.
                            </p>
                            <h5 className='text-white mb-0 text-uppercase'>
                                Our Achievements
                            </h5>
                        </div>
                    </div>
                    <div className='col-xl-11'>
                        <div className='position-relative' style={window.innerWidth < 768 ? { marginBottom: '40px' } : {}}>
                            <Slider
                                {...mainSliderSettings}
                                ref={mainSliderRef}
                                className='testimonials-slider'
                            >
                                {testimonialsData.map((testimonial, index) => (
                                    <div key={index} className='testimonials-item'>
                                        <h6 className='text-white text-uppercase mt-10 mb-8 fw-medium'>
                                            {testimonial.name}
                                        </h6>
                                        <span className='text-md text-white fw-normal'>
                                            {testimonial.presentor}
                                        </span>
                                        <p className='testimonials-item__desc text-white text-xl fw-normal mt-20 max-w-990'>
                                            {testimonial.desc}
                                        </p>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <Slider
                            {...thumbSliderSettings}
                            ref={thumbSliderRef}
                            className='testimonials-thumbs-slider'
                        >
                            {testimonialsData.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className='testimonials-thumbs d-flex position-relative align-items-end justify-content-end'
                                >
                                    <div className='testimonials-thumbs__img'>
                                        <img
                                            src={testimonial.img}
                                            alt={testimonial.name}
                                            className='cover-img'
                                        />
                                    </div>
                                    <div className='testimonials-thumbs__content position-absolute transition-2 bottom-0 start-50 translate-middle-x mb-16 text-center hidden opacity-0'>
                                        <h6 className='text-white mb-8 fw-medium'>
                                            {testimonial.name}
                                        </h6>
                                        <span className='text-md text-white fw-normal'>
                                            {testimonial.presentor}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;