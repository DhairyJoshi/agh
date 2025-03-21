// Crops.js
import React from 'react';
import CropCard from './CropCard'; // Adjust path if needed

const cropData = [
  {
    cropName: "Tomato",
    cropImage: "assets/images/crops/tomato.png",
    fertilizerImages: [
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle3.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle5.png"
    ]
  },
  {
    cropName: "Paddy",
    cropImage: "assets/images/crops/paddy.png",
    fertilizerImages: [
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle3.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle5.png"
    ]
  },
  {
    cropName: "Mango",
    cropImage: "assets/images/crops/mango.png",
    fertilizerImages: [
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle3.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle5.png"
    ]
  },
  {
    cropName: "Cotton",
    cropImage: "assets/images/crops/cotton.png",
    fertilizerImages: [
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle3.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle5.png"
    ]
  },
  {
    cropName: "Citrius",
    cropImage: "assets/images/crops/citrius.png",
    fertilizerImages: [
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle3.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle5.png"
    ]
  },
  {
    cropName: "Chilli",
    cropImage: "assets/images/crops/chilli.png",
    fertilizerImages: [
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle3.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle5.png"
    ]
  },
  {
    cropName: "Cashew",
    cropImage: "assets/images/crops/cashew.png",
    fertilizerImages: [
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle3.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle5.png"
    ]
  },
  {
    cropName: "Watermelon",
    cropImage: "assets/images/crops/watermelon.png",
    fertilizerImages: [
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle3.png",
      "assets/images/crops/bottle4.png",
      "assets/images/crops/bottle5.png"
    ]
  }
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
              fertilizerImages={crop.fertilizerImages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crops;