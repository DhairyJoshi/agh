// Crops.js
import React from 'react';
import CropCard from './CropCard'; // Adjust path if needed

const cropData = [
  {
    cropName: "Chilli",
    cropImage: "assets/images/crops/chilli.png",
    fertilizerNames: [
      "Bhoo Shakti",
      "Mr Chilli",
      "Mantra",
      "Tiger",
      "Perfect",
    ],
    fertilizerImages: [
      "assets/images/crops/Bhu_Shakti.png",
      "assets/images/crops/MrChilli.png",
      "assets/images/crops/Mantra.png",
      "assets/images/crops/Tiger.png",
      "assets/images/crops/Perfect.png"
    ]
  },
  {
    cropName: "Cotton",
    cropImage: "assets/images/crops/cotton.png",
    fertilizerNames: [
      "Mr Chilli",
      "Bhoo Shakti",
      "Temper",
      "Tiger",
      "Kick",
    ],
    fertilizerImages: [
      "assets/images/crops/MrChilli.png",
      "assets/images/crops/Bhu_Shakti.png",
      "assets/images/crops/Temper.jpeg",
      "assets/images/crops/Tiger.png",
      "assets/images/crops/Kick.png"
    ]
  },
  {
    cropName: "Paddy",
    cropImage: "assets/images/crops/paddy.png",
    fertilizerNames: [
      "Tiger",
      "RapiGrow GR",
      "Bhoo Shakti",
      "Vajra",
    ],
    fertilizerImages: [
      "assets/images/crops/Tiger.png",
      "assets/images/crops/RapiGrow.png",
      "assets/images/crops/Bhu_Shakti.png",
      "assets/images/crops/Vajra.png",
    ]
  },
  {
    cropName: "Maize",
    cropImage: "assets/images/crops/paddy.png",
    fertilizerNames: [
      "Bhoo Shakti",
      "Mr Chilli",
      "Mantra",
      "Tiger",
      "Perfect",
    ],
    fertilizerImages: [
      "assets/images/crops/Bhu_Shakti.png",
      "assets/images/crops/MrChilli.png",
      "assets/images/crops/Mantra.png",
      "assets/images/crops/Tiger.png",
      "assets/images/crops/Perfect.png"
    ]
  },
  {
    cropName: "Tomato",
    cropImage: "assets/images/crops/tomato.png",
    fertilizerNames: [
      "Bhoo Shakti",
      "Mr Chilli",
      "Mantra",
      "Tiger",
      "Perfect",
    ],
    fertilizerImages: [
      "assets/images/crops/Bhu_Shakti.png",
      "assets/images/crops/MrChilli.png",
      "assets/images/crops/Mantra.png",
      "assets/images/crops/Tiger.png",
      "assets/images/crops/Perfect.png"
    ]
  },
  {
    cropName: "Mango",
    cropImage: "assets/images/crops/mango.png",
    fertilizerNames: [
      "Bhoo Shakti",
      "Mr Chilli",
      "Mantra",
      "Tiger",
      "Perfect",
    ],
    fertilizerImages: [
      "assets/images/crops/Bhu_Shakti.png",
      "assets/images/crops/MrChilli.png",
      "assets/images/crops/Mantra.png",
      "assets/images/crops/Tiger.png",
      "assets/images/crops/Perfect.png"
    ]
  },
];

const Crops = () => {
  return (
    <section className="top-vendors py-80">
      <div className="container container-lg">
        <div className="section-heading">
          <h3 className="text-center mb-0">Popular Crops</h3>
        </div>
        <div className="row gy-4 vendor-card-wrapper">
          {cropData.map((crop, index) => (
            <CropCard
              key={index}
              cropName={crop.cropName}
              cropImage={crop.cropImage}
              fertilizerNames={crop.fertilizerNames}
              fertilizerImages={crop.fertilizerImages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crops;