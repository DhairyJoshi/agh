import React from 'react'

const CropsTwo = () => {

    const cropDetails = [
        { imgUrl: "assets/images/crops/wheat-seeds.jpeg", title: "Wheat" },
        { imgUrl: "assets/images/crops/rice-seeds.jpg", title: "Rice" },
        { imgUrl: "assets/images/crops/corn-seeds.jpg", title: "Corn" },
        { imgUrl: "assets/images/crops/soybean-seeds.png", title: "Soybean" },
        { imgUrl: "assets/images/crops/sunflower-seeds.png", title: "Sunflower" },
        { imgUrl: "assets/images/crops/cotton-seeds.png", title: "Cotton" },
        { imgUrl: "assets/images/crops/mustard-seeds.png", title: "Mustard" },
        { imgUrl: "assets/images/crops/groundnut-seeds.png", title: "Groundnut" },
    ];

    return (
        <div className='container container-lg'>
            <div className='d-flex flex-column'>
                <h3 className='text-center mb-20'>Popular Seeds</h3>

                <div className='d-flex flex-wrap justify-content-center'>
                    {cropDetails.map((crop, index) => (
                        <div key={index} className='d-flex flex-column justify-content-center align-items-center m-10'>
                            <div style={{ width: '15rem', height: '15rem', borderRadius: '100%', overflow: 'hidden' }}>
                                <img
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                                    src={crop.imgUrl}
                                    alt={crop.title}
                                />
                            </div>
                            <h6 className='mt-20'>{crop.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CropsTwo