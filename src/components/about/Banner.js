import React from 'react'

const Banner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mt-0 text-uppercase' style={{ position: 'relative', width: '100%', height: '60vh', overflow: 'hidden' }}>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} src="assets/images/bg/about-banner.jpg" />
            <h2 style={{ position: 'absolute', color: 'white' }}>Our Story</h2>
        </div>
    )
}

export default Banner