import React from 'react'

const Seeds = () => {

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
                        <div key={index} className='seed-container'>
                            <div className='seed-image-container'>
                                <img className='seed-image' src={crop.imgUrl} alt={crop.title} />
                            </div>
                            <h6 className='seed-title'>{crop.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Seeds