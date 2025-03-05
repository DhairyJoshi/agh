import React, { useEffect, useState } from 'react'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs';
import Footer from '../home/Footer';
import Facilities from '../home/Facilities';
import Offers from '../home/Offers';

export default function Offer() {
    const [time, setTime] = useState(new Date());
    const [save, setSave] = useState(false)


    useEffect(() => {
        // Set an interval to update the time every second (1000 milliseconds)
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this runs once when the component mounts



    return (
        <div>
            <TopHeader isUpdate={save} />
            <Breadcrumbs main={"Offers"} parent={"Offers"} />
            <Offers flag={true} save={setSave} isUpdate={save}/>
            <Facilities />
            <Footer />
        </div>
    )
}
