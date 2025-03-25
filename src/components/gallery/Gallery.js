import React, { useCallback, useEffect } from 'react';
import $ from 'jquery';
import 'magnific-popup';
import TopHeader from '../home/TopHeader';
import Footer from '../home/Footer';
import Breadcrumbs from '../common/Breadcrumbs';
import Preloader from '../common/Preloader';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';

export default function Gallery() {
    const dispatch = useDispatch();
    const { GET_ALL_PRODUCTS } = bindActionCreators(actionCreators, dispatch);
    const products = useSelector((state) => state.productReducer.products);
    // const [data, setData] = useState();

    const fetchProducts = useCallback(() => {
        GET_ALL_PRODUCTS();
    }, [GET_ALL_PRODUCTS]);

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [products, dispatch, fetchProducts]);

    useEffect(() => {
        $('.gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: { enabled: true },
            removalDelay: 300,
            fixedContentPos: true
        });
    }, []);


    return (
        <>
            <Preloader />

            <TopHeader />

            <Breadcrumbs main="View Gallery" parent="Gallery" />

            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                <div className="container container-lg d-flex justify-content-center align-items-center flex-wrap gallery">
                    {products.map((product, index) => (
                        <div key={index} style={{ margin: '0.5rem 0.75rem' }}>
                            <a href={ `https://api.farmerconnects.com${product.image_0}` }>
                                <img 
                                    style={{ width:'400px', height: '280px', objectFit: 'cover', objectPosition: 'center', borderRadius: '0.75rem' }}
                                    src={ `https://api.farmerconnects.com${product.image_0}` } 
                                    alt={`Gallery ${index + 1}`} 
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </ScrollAnimation>
            <Footer />
        </>
    );
}