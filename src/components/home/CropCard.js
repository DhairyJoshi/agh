import React from 'react';

const CropCard = ({ cropName, cropImage, fertilizerImages }) => {
    return (
        <div className="col-xxl-4 col-lg-4 col-sm-6">
            <div className="vendor-card text-center px-16 pb-24">
                <div>
                    <img
                        src={cropImage}
                        className="vendor-card__logo"
                        style={{ height: '10rem', width: '10rem' }}
                        alt={cropName}
                    />
                    <h6 className="title mt-32">{cropName}</h6>
                </div>
                <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                    {fertilizerImages.map((img, index) => (
                        <div
                            key={index}
                            style={{ overflow: 'hidden' }}
                            className="vendor-card__item bg-white rounded-circle flex-center"
                        >
                            <img style={{ width: 'auto', height: '100%', objectFit: 'contain', objectPosition: 'center' }} src={img} alt={`fertilizer-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CropCard;