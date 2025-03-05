import React, { useEffect, useState } from 'react'
import TopHeader from './TopHeader'
import AdvertiseBanner from './AdvertiseBanner'
import Categories from './Categories'
import LastMinutesDeal from './LastMinutesDeal'
import Products from './Products'
import DealOfDay from './DealOfDay'
import Facilities from './Facilities'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import AllProducts from './AllProducts'

export default function Home() {

  const [time, setTime] = useState(new Date());
  const [save, setSave] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Set an interval to update the time every second (1000 milliseconds)
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000)
  }, [])

  return (
    <div>
      <TopHeader isUpdate={save} />
      <AdvertiseBanner />
      {
        show && <>
          <Categories />
        </>
      }

      <LastMinutesDeal />
      <Products save={setSave} isUpdate={save} />
      <DealOfDay save={setSave} isUpdate={save} />
      {/* <Offers save={setSave} isUpdate={save} /> */}
      <AllProducts save={setSave} isUpdate={save}/>
      <Facilities />
      <NewsLetter />
      <Footer />
    </div>
  )
}
