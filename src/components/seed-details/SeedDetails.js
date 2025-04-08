import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import seedData from './seedData';

const SeedDetails = () => {
    const { seedSlug } = useParams();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const seed = seedData.find(s => s.slug === seedSlug);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!seed) return <div className="container"><p>Seed not found.</p></div>;

    return (
        <section className="product-details">
            <div className="container container-lg">
                <div
                    style={{
                        height: isMobile ? '90vh' : '70vh',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid #e5e7eb',
                        borderRadius: '16px',
                        padding: '16px',
                        overflow: 'hidden'
                    }}
                >
                    <div
                        style={{
                            height: isMobile ? 'auto' : '100%',
                            width: isMobile ? '100%' : '60%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={`/${seed.imgUrl}`}
                            alt={seed.title}
                            style={{ padding: '8px', borderRadius: '18px', maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                    <div
                        style={{
                            width: isMobile ? '100%' : '40%',
                            padding: '16px',
                        }}
                    >
                        <h6 style={{ marginBottom: '16px', fontSize: '1.125rem' }}>{seed.title}</h6>
                        <p>
                            {seed.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeedDetails;