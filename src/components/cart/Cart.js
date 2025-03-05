import React, { useEffect, useState } from 'react'
import TopHeader from '../home/TopHeader'
import Breadcrumbs from '../common/Breadcrumbs'
import Facilities from '../home/Facilities'
import Footer from '../home/Footer'
import AddedProducts from './AddedProducts'

export default function Cart() {

    const [time, setTime] = useState(new Date());

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
            <TopHeader />
            <Breadcrumbs main={"Cart"} parent={"Cart"} />
            <AddedProducts />
            <Facilities />
            <Footer />

        </div>
    )
}
