import { useEffect, useState } from "react";

const Preloader = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);

  return (
    <>
      {active ? (
        <div className="preloader">
          <img style={{ height: '30vh', width: 'auto' }} src="assets/images/icon/plant.gif" alt="Loading..." />
        </div>

      ) : (<div></div>)}
    </>
  );
};

export default Preloader;