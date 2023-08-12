import { useState } from "react";
import data from "../../../Backend/data.json";

function Destination() {
  const [planet, setPlanet] = useState(0);
  const [active, setActive] = useState(0);
  const destination = data.destinations;

  function handleClick(e) {
    setPlanet(e.target.value);
    setActive(e.target.value);
  }

  return (
    <div className="min-h-screen bg-destination-mobile bg-no-repeat bg-cover text-white md:bg-destination-tablet lg:bg-destination-desktop ">
      <div className="flex flex-col pt-24 text-center h-full px-8 bg-zinc-900 bg-opacity-25 mx-auto md:pt-32 md:text-left lg:flex-row lg:pt-48 ">
        <div className="flex flex-col items-center text-center md:text-left lg:w-3/5 lg:min-h-[78.5vh] lg:justify-center lg:gap-4">
          <p className="font-other tracking-[2.7px] w-full text-xl lg:text-[28px] lg:tracking-[4.72px] lg:ml-48 lg:mb-8 ">
            <span className="mr-4 font-bold opacity-25">01</span>PICK YOUR
            DESTINATION
          </p>
          <img
            src={destination[planet].images.webp}
            alt={`image of the planet ${destination[planet].name}`}
            className="h-44 w-44 mt-8 mb-6 md:h-[300px] md:w-[300px] md:mt-16 md:mb-10 lg:h-[445px] lg:w-[445px]"
          ></img>
        </div>
        <div className="flex flex-col items-center text-center lg:w-2/5 lg:text-left lg:items-start lg:justify-center lg:mt-24 ">
          <div className="w-full flex justify-around px-8 mb-4 md:w-7/12 md:mb-6 lg:px-0 lg:justify-start lg:gap-8">
            <button
              className={
                active == 0
                  ? "Destination--Active"
                  : "text-primary hover:underline-offset-8 hover:underline hover:decoration-3 decoration-white/50 font-other tracking-[2.36px] md:hover:underline-offset-[12px] "
              }
              value={0}
              onClick={handleClick}
            >
              MOON
            </button>
            <button
              className={
                active == 1
                  ? "Destination--Active"
                  : "text-primary hover:underline-offset-8 hover:underline hover:decoration-3 decoration-white/50 font-other tracking-[2.36px] md:hover:underline-offset-[12px]"
              }
              value={1}
              onClick={handleClick}
            >
              MARS
            </button>
            <button
              className={
                active == 2
                  ? "Destination--Active"
                  : "text-primary hover:underline-offset-8 hover:underline hover:decoration-3 decoration-white/50 font-other tracking-[2.36px] md:hover:underline-offset-[12px]"
              }
              value={2}
              onClick={handleClick}
            >
              EUROPA
            </button>
            <button
              className={
                active == 3
                  ? "Destination--Active"
                  : "text-primary hover:underline-offset-8 hover:underline hover:decoration-3 decoration-white/50 font-other tracking-[2.36px] md:hover:underline-offset-[12px]"
              }
              value={3}
              onClick={handleClick}
            >
              TITAN
            </button>
          </div>

          <h1 className="uppercase text-[56px] font-normal font-title md:text-[80px] lg:text-[100px] ">
            {destination[planet].name}
          </h1>
          <p className="font-text text-primary mt-2 text-[15px] leading-[25px] md:text-base md:w-[82%] md:pb-6 md:leading-7 md:mt-0 lg:text-[18px] lg:leading-8 ">
            {destination[planet].description}
          </p>

          <div className="w-full h-px bg-white opacity-25 my-8 md:w-10/12 md:mt-6 md:mb-8"></div>

          <div className="flex flex-col pb-14 md:flex-row md:w-8/12 justify-around lg:justify-start lg:w-full">
            <p className="flex flex-col text-primary font-other tracking-[2.36px] text-sm leading-normal lg:text-sm lg:mr-20">
              AVG. DISTANCE
              <span className="mt-3 text-white uppercase text-[28px] font-title">
                {destination[planet].distance}
              </span>
            </p>
            <p className="flex flex-col mt-8 text-primary font-other tracking-[2.36px] text-sm leading-normal md:mt-0 lg:text-sm">
              EST. TRAVEL TIME
              <span className="mt-3 text-white uppercase text-[28px] font-title">
                {destination[planet].travel}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
