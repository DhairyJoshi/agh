import React, { useEffect, useState } from 'react'
import TopHeader from '../home/TopHeader'
import Facilities from '../home/Facilities'
import Footer from '../home/Footer'
import Breadcrumbs from '../common/Breadcrumbs'
import Products from './Products'

export default function Shop() {

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
      <Breadcrumbs main={"Shop Now"} parent={"Shop"} />
      <Products save={setSave} isUpdate={save} />
      <Facilities />
      <Footer />
    </div>
  )
}
