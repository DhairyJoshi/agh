import React, { useEffect, useState } from 'react';

const SeedDetails = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mainImage = [
        "assets/images/crops/wheat-seeds.jpeg",
    ];

    return (
        <section className="product-details">
            <div className="container container-lg">
                <div
                    style={{
                        height: isMobile ? '90vh' : '70vh',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid #e5e7eb',
                        borderRadius: '16px',
                        padding: '16px',
                    }}
                >
                    <div
                        style={{
                            height: isMobile ? 'auto' : '100%',
                            width: isMobile ? '100%' : '60%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={mainImage}
                            alt="Main Product"
                            style={{ padding: '8px', borderRadius: '18px', maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                    <div
                        style={{
                            width: isMobile ? '100%' : '40%',
                            padding: '16px',
                        }}
                    >
                        <h6 style={{ marginBottom: '16px', fontSize: '1.125rem' }}>Wheat</h6>
                        <p>
                            Our premium-quality Wheat Seeds are selected to ensure optimal germination and high yield.
                            Perfect for both small-scale and commercial farming, these seeds are resistant to common
                            diseases and adapted to diverse climatic conditions.
                        </p>
                    </div>
                </div>
                <div className="mt-56">
                    <div className="product-dContent border rounded-24">
                        <div className="product-dContent__box">
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-description"
                                    role="tabpanel"
                                    aria-labelledby="pills-description-tab"
                                    tabIndex={0}
                                >
                                    <div className="mb-40">
                                        <h6 className="mb-24">Seed Details</h6>
                                        <p>
                                            Our premium-quality Wheat Seeds are selected to ensure optimal germination and high yield. Perfect for both small-scale and commercial farming, these seeds are resistant to common diseases and adapted to diverse climatic conditions.
                                        </p>
                                        <p>
                                            Sourced from certified organic farms, these seeds offer improved tillering, stronger root systems, and consistent grain quality. Ideal for producing flour, pasta, and other wheat-based products.
                                        </p>
                                        <ul className="list-inside mt-32 ms-16">
                                            <li className="text-gray-400 mb-4">High germination rate (≥ 95%)</li>
                                            <li className="text-gray-400 mb-4">Suited for multiple soil types</li>
                                            <li className="text-gray-400 mb-4">Drought and disease resistant</li>
                                            <li className="text-gray-400 mb-4">Certified non-GMO</li>
                                        </ul>
                                        <ul className="mt-32">
                                            <li className="text-gray-400 mb-4">Packaged in breathable eco-bags</li>
                                            <li className="text-gray-400 mb-4">Shelf life: 12 months</li>
                                        </ul>
                                    </div>

                                    <div className="mb-40">
                                        <h6 className="mb-24">Seed Specifications</h6>
                                        <ul className="mt-32">
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Seed Type:
                                                    <span className="text-gray-500"> Wheat</span>
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Variety:
                                                    <span className="text-gray-500"> HD 2967</span>
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Brand:
                                                    <span className="text-gray-500"> AGH</span>
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Organic Certified:
                                                    <span className="text-gray-500"> Yes</span>
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Net Weight:
                                                    <span className="text-gray-500"> 10kg</span>
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Batch No:
                                                    <span className="text-gray-500"> WTH2324-10KG</span>
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Sowing Season:
                                                    <span className="text-gray-500"> Rabi (Nov – Jan)</span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mb-40">
                                        <h6 className="mb-24">Yield Potential</h6>
                                        <ul className="mt-32">
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Average Yield: 55–65 quintals/ha
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Days to Maturity: 120–130 days
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-heading fw-medium">
                                                    Water Requirement: Medium
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mb-0">
                                        <h6 className="mb-24">Additional Info</h6>
                                        <ul className="mt-32">
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-gray-500">
                                                    Stored in climate-controlled facilities
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-gray-500">
                                                    Lab-tested for purity and germination
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-gray-500">
                                                    Suitable for organic and conventional farming
                                                </span>
                                            </li>
                                            <li className="text-gray-400 mb-14 flex-align gap-14">
                                                <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                                                    <i className="ph ph-check" />
                                                </span>
                                                <span className="text-gray-500">
                                                    Recommended by agricultural extension services
                                                </span>
                                            </li>
                                        </ul>
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

export default SeedDetails;