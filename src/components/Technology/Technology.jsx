import { useState } from "react";
import data from "../../../Backend/data.json";

function Technology() {
  const [transport, setTransport] = useState(0);
  const [active, setActive] = useState(0);
  const technology = data.technology;

  function handleClick(e) {
    setTransport(e.target.value);
    setActive(e.target.value);
  }

  const isDesktop = window.innerWidth < 1024;

  return (
    <div className="min-h-screen bg-technology-mobile bg-cover bg-no-repeat text-white md:bg-technology-tablet lg:bg-technology-desktop">
      <div className="text-center h-screen bg-zinc-900 bg-opacity-40 pt-24 md:text-left">
        <p className="font-other text-base tracking-[2.7px] md:text-xl md:mt-8 md:tracking-[3.37px] lg:text-[28px] lg:tracking-[4.72px] lg:ml-32 lg:mt-16">
          <span className="opacity-25 pl-11">03</span> SPACE LAUNCH 101
        </p>

        <div className="lg:flex lg:flex-row-reverse text-center lg:h-[80%]">
          <img
            src={
              isDesktop
                ? technology[transport].images.landscape
                : technology[transport].images.portrait
            }
            alt={`image of the ${technology[transport].name}`}
            className="h-[170px] w-full my-8 md:h-[310px] md:mb-14 lg:h-[525px] lg:w-[515px] lg:mt-12"
          ></img>
          <div className="lg:flex lg:items-center lg:ml-40">
            <div className="flex justify-center gap-4 mb-6 md:mb-11 lg:flex-col lg:mb-0 lg:mx-2 lg:gap-8">
              <button
                className={
                  active == 0
                    ? "Technology--Active"
                    : "h-10 w-10 border-2 border-white rounded-full bg-transparent border-opacity-25 hover:border-opacity-100 md:h-[60px] md:w-[60px] md:text-2xl lg:h-[80px] lg:w-[80px] lg:text-[32px]"
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
                    : "h-10 w-10 border-2 border-white rounded-full bg-transparent border-opacity-25 hover:border-opacity-100 md:h-[60px] md:w-[60px] md:text-2xl lg:h-[80px] lg:w-[80px] lg:text-[32px]"
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
                    : "h-10 w-10 border-2 border-white rounded-full bg-transparent border-opacity-25 hover:border-opacity-100 md:h-[60px] md:w-[60px] md:text-2xl lg:h-[80px] lg:w-[80px] lg:text-[32px]"
                }
                value={2}
                onClick={handleClick}
              >
                3
              </button>
            </div>

            <div className="md:px-[155px] lg:px-20 lg:text-left">
              <p className="font-other text-primary tracking-[2.36px] mb-1 lg:tracking-[2.7px] lg:mb-3">
                THE TERMINOLOGY...
              </p>
              <h1 className="font-title text-2xl uppercase mb-4 font-normal md:text-[40px] md:py-4 lg:text-[56px] lg:mb-4">
                {technology[transport].name}
              </h1>
              <p className="px-6 font-text text-primary leading-[25px] text-[15px] md:text-base md:leading-7 md:px-0 lg:leading-8 lg:text-[18px]">
                {technology[transport].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
