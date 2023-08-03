import { useState } from "react";
import data from "../../../../Backend/data.json";

function Destination() {
  const [planet, setPlanet] = useState(0);
  const [active, setActive] = useState(0);
  const destination = data.destinations;

  function handleClick(e) {
    setPlanet(e.target.value);
    setActive(e.target.value);
  }

  return (
    <div className="min-h-screen bg-destination-mobile bg-no-repeat bg-cover text-white">
      <div className="flex flex-col pt-24 text-center h-full px-8 bg-zinc-900 bg-opacity-25 mx-auto">
        <p className="font-other tracking-[2.7px]">
          <span className="mr-4 font-bold opacity-25">01</span>PICK YOUR
          DESTINATION
        </p>
        <div className="flex flex-col items-center">
          <img
            src={destination[planet].images.png}
            alt={`image of the planet ${destination[planet].name}`}
            className="h-44 w-44 mt-8 mb-6"
          ></img>
          <div className="w-full flex justify-around px-8 mb-4">
            <button
              className={
                active == 0
                  ? "Destination--Active"
                  : "text-primary hover:underline-offset-8 hover:underline hover:decoration-3 decoration-white/50 font-other tracking-[2.36px] "
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
                  : "text-primary hover:underline-offset-8 hover:underline hover:decoration-3 decoration-white/50 font-other tracking-[2.36px] "
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
                  : "text-primary hover:underline-offset-8 hover:underline hover:decoration-3 decoration-white/50 font-other tracking-[2.36px]"
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
                  : "text-primary hover:underline-offset-8 hover:underline hover:decoration-3 decoration-white/50 font-other tracking-[2.36px] "
              }
              value={3}
              onClick={handleClick}
            >
              TITAN
            </button>
          </div>
          <h1 className="uppercase text-[56px] font-normal font-title">
            {destination[planet].name}
          </h1>
          <p className="font-text text-primary mt-2 text-[15px] leading-[25px]  ">
            {destination[planet].description}
          </p>

          <div className="w-full h-px bg-white opacity-25 my-8"></div>
          <div className="flex flex-col pb-14">
            <p className="flex flex-col text-primary font-other tracking-[2.36px] text-sm leading-normal">
              AVG. DISTANCE
              <span className="mt-3 text-white uppercase text-[28px] font-title">
                {destination[planet].distance}
              </span>
            </p>
            <p className="flex flex-col mt-8 text-primary font-other tracking-[2.36px] text-sm leading-normal">
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
