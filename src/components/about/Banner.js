import React from 'react'

const Banner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mt-0 text-uppercase' style={{ position: 'relative', width: '100%', height: '82vh', overflow: 'hidden' }}>
            <div className='w-100 h-100' style={{ backgroundImage: "url('assets/images/bg/about-banner.jpg')", backgroundColor: 'rgba(0,0,0,0.4)', backgroundBlendMode: 'overlay', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            </div>
            <h2 className='position-absolute' style={{ color: '#36c278' }}>Our Story</h2>
        </div>
    )
}

export default Banner