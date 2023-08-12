import { useState } from "react";
import data from "../../../../Backend/data.json";

function Technology() {
  const [transport, setTransport] = useState(0);
  const [active, setActive] = useState(0);
  const technology = data.technology;

  function handleClick(e) {
    setTransport(e.target.value);
    setActive(e.target.value);
  }

  return (
    <div className="min-h-screen bg-technology-mobile bg-cover bg-no-repeat text-white md:bg-technology-tablet">
      <div className="text-center h-screen bg-zinc-900 bg-opacity-40 pt-24 md:text-left">
        <p className="font-other text-base tracking-[2.7px] md:text-xl md:mt-8 md:tracking-[3.37px]">
          <span className="opacity-25 pl-11">03</span> SPACE LAUNCH 101
        </p>

        <div className="text-center">
          <img
            src={technology[transport].images.landscape}
            alt={`image of the ${technology[transport].name}`}
            className="h-[170px] w-full my-8 md:h-[310px] md:mb-14"
          ></img>

          <div className="flex justify-center gap-4 mb-6 md:mb-11">
            <button
              className={
                active == 0
                  ? "Technology--Active"
                  : "h-10 w-10 border-2 border-white rounded-full bg-transparent border-opacity-25 hover:border-opacity-100 md:h-[60px] md:w-[60px] md:text-2xl"
              }
              value={0}
              onClick={handleClick}
            >
              1
            </button>
            <button
              className={
                active == 1
                  ? "Technology--Active"
                  : "h-10 w-10 border-2 border-white rounded-full bg-transparent border-opacity-25 hover:border-opacity-100 md:h-[60px] md:w-[60px] md:text-2xl"
              }
              value={1}
              onClick={handleClick}
            >
              2
            </button>
            <button
              className={
                active == 2
                  ? "Technology--Active"
                  : "h-10 w-10 border-2 border-white rounded-full bg-transparent border-opacity-25 hover:border-opacity-100 md:h-[60px] md:w-[60px] md:text-2xl"
              }
              value={2}
              onClick={handleClick}
            >
              3
            </button>
          </div>

          <div className="md:px-[155px]">
            <p className="font-other text-primary tracking-[2.36px] mb-1">
              THE TERMINOLOGY...
            </p>
            <h1 className="font-title text-2xl uppercase mb-4 font-normal md:text-[40px] md:py-4">
              {technology[transport].name}
            </h1>
            <p className="px-6 font-text text-primary leading-[25px] text-[15px] md:text-base md:leading-7 md:px-0">
              {technology[transport].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
