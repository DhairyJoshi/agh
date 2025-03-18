import React, { useEffect } from 'react';
import $ from 'jquery';
import 'magnific-popup';
import TopHeader from '../home/TopHeader';
import Footer from '../home/Footer';
import Breadcrumbs from '../common/Breadcrumbs';
import img1 from '../../assets/product_gallery/1.jpg';
import img2 from '../../assets/product_gallery/2.jpg';
import img3 from '../../assets/product_gallery/3.jpg';
import img4 from '../../assets/product_gallery/4.jpg';
import img5 from '../../assets/product_gallery/5.jpg';
import img6 from '../../assets/product_gallery/6.jpg';
import img7 from '../../assets/product_gallery/7.jpg';
import img8 from '../../assets/product_gallery/8.jpg';
import Preloader from '../common/Preloader';

export default function Gallery() {
    useEffect(() => {
        $('.gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: { enabled: true },
            removalDelay: 300,
            fixedContentPos: true
        });
    }, []);

    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
        <>
            <Preloader />
            <TopHeader />
            <Breadcrumbs main="View Gallery" parent="Gallery" />
            <div className="container container-lg d-flex justify-content-center align-items-center flex-wrap gallery">
                {images.map((img, index) => (
                    <div key={index} style={{ margin: '0.5rem 0.75rem' }}>
                        <a href={img}>
                            <img 
                                style={{ width:'400px', height: '280px', objectFit: 'cover', objectPosition: 'center', borderRadius: '0.75rem' }}
                                src={img} 
                                alt={`Gallery ${index + 1}`} 
                            />
                        </a>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}