import React from 'react'

const AboutContent = () => {
  return (
    <div className='container container-lg py-48'>
      <div className='text-center'>
        <h3>Nourishment is our mission</h3>
        <span>Our mission is "Nourishment"—enhancing soil fertility, boosting crop yields, and ensuring sustainable agriculture. We strive to provide high-quality fertilizers that enrich the land while protecting the environment for future generations.</span>
      </div>

      <div className='d-flex flex-wrap justify-content-between align-items-center mt-80'>
        <div className='d-flex flex-column justify-content-center align-items-center m-16'>
            <div className='mb-12' style={{ width: '9rem', height: '9rem' }}>
                <img src="assets/images/about/variety.png" />
            </div>
            <span className='text-center fs-5'>Widest Variety</span>
        </div>

        <div className='d-flex flex-column justify-content-center align-items-center m-16'>
            <div className='mb-12' style={{ width: '9rem', height: '9rem' }}>
                <img src="assets/images/about/quality.png" />
            </div>
            <span className='text-center fs-5'>Quality Assurance</span>
        </div>

        <div className='d-flex flex-column justify-content-center align-items-center m-16'>
            <div className='mb-12' style={{ width: '9rem', height: '9rem' }}>
                <img src="assets/images/about/price.png" />
            </div>
            <span className='text-center fs-5'>Budget Friendly</span>
        </div>

        <div className='d-flex flex-column justify-content-center align-items-center m-16'>
            <div className='mb-12' style={{ width: '9rem', height: '9rem' }}>
                <img src="assets/images/about/source.png" />
            </div>
            <span className='text-center fs-5'>Locally Sourced</span>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
