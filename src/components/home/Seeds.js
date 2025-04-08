import React from 'react'
import seedDetails from '../seed-details/seedData'; // adjust path as needed
import { Link } from 'react-router-dom';

const Seeds = () => {

    return (
        <div className='container container-lg'>
            <div className='d-flex flex-column'>
                <h3 className='text-center mb-20'>Popular Seeds</h3>

                <div className='d-flex flex-wrap justify-content-center'>
                    {seedDetails.map((seed, index) => (
                        <Link to={`/seed-details/${seed.slug}`} href='/seed-details' key={index} className='seed-container'>
                            <div className='seed-image-container'>
                                <img className='seed-image' src={seed.imgUrl} alt={seed.title} />
                            </div>
                            <h6 className='seed-title'>{seed.title}</h6>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Seeds