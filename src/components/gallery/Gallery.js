import React, { useCallback, useEffect, useState } from 'react';
import $ from 'jquery';
import 'magnific-popup';
import TopHeader from '../home/TopHeader';
import Footer from '../home/Footer';
import Breadcrumbs from '../common/Breadcrumbs';
import Preloader from '../common/Preloader';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';

export default function Gallery() {
    const dispatch = useDispatch();
    const { GET_GALLERY } = bindActionCreators(actionCreators, dispatch);
    const gallery = useSelector((state) => state.galleryReducer.gallery);

    const [mediaType, setMediaType] = useState('images'); // default: images

    const fetchGallery = useCallback(() => {
        GET_GALLERY();
    }, [GET_GALLERY]);

    useEffect(() => {
        if (!gallery || gallery.length === 0) {
            fetchGallery();
        }
    }, [gallery, fetchGallery]);

    useEffect(() => {
        // Initialize Magnific Popup with dynamic elementParse callback
        $('.gallery').magnificPopup({
            delegate: 'a',
            type: 'image', // Default type
            gallery: { enabled: true },
            removalDelay: 300,
            fixedContentPos: true,
            callbacks: {
                elementParse: function (item) {
                    // Dynamically set the type to iframe if it's a video URL (YouTube/Vimeo)
                    if (item.src.includes('youtube.com') || item.src.includes('vimeo.com')) {
                        item.type = 'iframe'; // Treat as iframe for video
                    } else {
                        item.type = 'image'; // Otherwise, treat as image
                    }
                },
            },
        });
    }, []);

    const convertToEmbedURL = (url) => {
        try {
            const ytRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]+)/;
            const match = url.match(ytRegex);
            if (match && match[1]) {
                return `https://www.youtube.com/embed/${match[1]}`;
            }
        } catch (e) {
            console.error("Invalid YouTube URL:", url);
        }
        return url;
    };


    const filteredGallery = gallery.filter((item) => {
        const type = item.gallery_type?.toLowerCase();
        if (mediaType === 'images') return type === 'image';
        if (mediaType === 'videos') return type === 'video';
        return true; // Show all media
    });

    return (
        <>
            <Preloader />
            <TopHeader />
            <Breadcrumbs main="View Gallery" parent="Gallery" />

            <div className="media-types-container container mb-4">
                <div>
                    <label>
                        <input
                            className="media-types"
                            type="radio"
                            name="media-type"
                            value="images"
                            checked={mediaType === 'images'}
                            onChange={() => setMediaType('images')}
                        />
                        <span>Images</span>
                    </label>
                    <label>
                        <input
                            className="media-types"
                            type="radio"
                            name="media-type"
                            value="videos"
                            checked={mediaType === 'videos'}
                            onChange={() => setMediaType('videos')}
                        />
                        <span>Videos</span>
                    </label>
                    <label>
                        <input
                            className="media-types"
                            type="radio"
                            name="media-type"
                            value="all"
                            checked={mediaType === 'all'}
                            onChange={() => setMediaType('all')}
                        />
                        <span>All Media</span>
                    </label>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center align-items-start gallery" style={{ gap: '1rem' }}>
                {filteredGallery.map((item, index) => (
                    <ScrollAnimation key={index} animateIn="fadeIn" duration={2} animateOnce={true}>
                        <div
                            style={{
                                margin: '0.5rem 0.75rem',
                                border: '1px solid #ccc',
                                borderRadius: '0.75rem',
                                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                                overflow: 'hidden',
                            }}
                        >
                            {item.gallery_type?.toLowerCase() === 'video' ? (
                                <div style={{ width: '350px', height: '250px', overflow: 'hidden' }}>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={convertToEmbedURL(item.video_url)}
                                        title={`Video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ display: 'block', verticalAlign: 'top' }}
                                    ></iframe>
                                </div>
                            ) : (
                                <a href={`https://api.farmerconnects.com${item.image}`}>
                                    <img
                                        style={{ width: '350px', height: 'auto' }}
                                        src={`https://api.farmerconnects.com${item.image}`}
                                        alt={item.name || `Gallery ${index + 1}`}
                                    />
                                </a>
                            )}
                        </div>
                    </ScrollAnimation>
                ))}
            </div>

            <Footer />
        </>
    );
}