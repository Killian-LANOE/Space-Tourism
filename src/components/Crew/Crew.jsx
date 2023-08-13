import data from "../../../Backend/data.json";
import { useState } from "react";

function Crew() {
  const [person, setPerson] = useState(0);
  const [active, setActive] = useState(0);
  const crew = data.crew;

  function handleClick(e) {
    setPerson(e.target.value);
    setActive(e.target.value);
  }

  return (
    <div className="h-screen bg-crew-mobile bg-cover bg-no-repeat text-white md:bg-crew-tablet md:overflow-hidden">
      <div className="h-screen bg-zinc-900 bg-opacity-60 pt-24 md:pt-32">
        <p
          className={`text-center font-other tracking-[2.7px] mb-6 md:text-left md:text-xl md:mb-8 md:tracking-[3.37px] lg:h-[34px] lg:tracking-[4.72px] lg:pt-20 lg:text-[28px] ${
            window.innerWidth < 1180 && window.innerWidth > 1024
              ? "lg:-ml-4"
              : "lg:ml-16"
          }`}
        >
          <span className="opacity-50 pl-11">02</span> MEET YOUR CREW
        </p>
        <div className="Crew--Content flex flex-col text-center px-6 md:px-[155px] md:flex-col-reverse lg:flex-row-reverse lg:px-0">
          <img
            src={crew[person].images.webp}
            alt={`image of ${crew[person].name}`}
            className={`h-[222px] w-auto mx-auto lg:max-h-[712px] lg:h-full ${
              window.innerHeight < 855 ? "Crew--Img" : "md:h-[572px]"
            }`}
          ></img>

          <div className="h-px w-11/12 opacity-20 bg-white mb-8 md:hidden"></div>

          <div
            className={`lg:flex lg:flex-col-reverse lg:w-1/2 Crew--Text--Start lg:text-left lg:items-start lg:mt-24 ${
              window.innerWidth < 1180 && window.innerWidth > 1024
                ? "lg:px-8"
                : "lg:px-28"
            }`}
          >
            <div className="flex justify-center gap-5 mb-8 md:mt-10">
              <button
                value={0}
                onClick={handleClick}
                className={
                  active == 0
                    ? "Crew--Active"
                    : "h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] bg-white opacity-20 rounded-full hover:opacity-50"
                }
              ></button>
              <button
                value={1}
                onClick={handleClick}
                className={
                  active == 1
                    ? "Crew--Active"
                    : "h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] bg-white opacity-20 rounded-full hover:opacity-50"
                }
              ></button>
              <button
                value={2}
                onClick={handleClick}
                className={
                  active == 2
                    ? "Crew--Active"
                    : "h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] bg-white opacity-20 rounded-full hover:opacity-50"
                }
              ></button>
              <button
                value={3}
                onClick={handleClick}
                className={
                  active == 3
                    ? "Crew--Active"
                    : "h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] bg-white opacity-20 rounded-full hover:opacity-50"
                }
              ></button>
            </div>

            <div className="flex flex-col ">
              <p className="font-title uppercase opacity-50 mb-1 md:text-2xl md:mb-0 lg:text-[2rem] lg:mb-4">
                {crew[person].role}
              </p>
              <h1 className="font-title uppercase text-2xl font-normal mb-4 md:text-[40px] md:leading-normal md:mb-2 lg:text-[56px] lg:mb-[27px] wrap">
                {crew[person].name}
              </h1>
              <p className="font-text leading-[25px] text-[15px] text-primary md:text-base md:leading-7 lg:text-[18px] lg:leading-8">
                {crew[person].bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
