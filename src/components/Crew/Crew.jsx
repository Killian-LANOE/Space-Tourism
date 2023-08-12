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
        <p className="text-center font-other tracking-[2.7px] mb-6 md:text-left md:text-xl md:mb-8 md:tracking-[3.37px]">
          <span className="opacity-50 pl-11">02</span> MEET YOUR CREW
        </p>
        <div className="Crew--Content flex flex-col text-center px-6 md:px-[155px] md:flex-col-reverse">
          <img
            src={crew[person].images.webp}
            alt={`image of ${crew[person].name}`}
            className={`h-[222px] w-auto mx-auto ${
              window.innerHeight < 855 ? "Crew--Img" : "md:h-[572px]"
            }`}
          ></img>

          <div className="h-px w-11/12 opacity-20 bg-white mb-8 md:hidden"></div>

          <div className="flex justify-center gap-5 mb-8 md:mt-10">
            <button
              value={0}
              onClick={handleClick}
              className={
                active == 0
                  ? "Crew--Active"
                  : "h-[10px] w-[10px] bg-white opacity-20 rounded hover:opacity-50"
              }
            ></button>
            <button
              value={1}
              onClick={handleClick}
              className={
                active == 1
                  ? "Crew--Active"
                  : "h-[10px] w-[10px] bg-white opacity-20 rounded hover:opacity-50"
              }
            ></button>
            <button
              value={2}
              onClick={handleClick}
              className={
                active == 2
                  ? "Crew--Active"
                  : "h-[10px] w-[10px] bg-white opacity-20 rounded hover:opacity-50"
              }
            ></button>
            <button
              value={3}
              onClick={handleClick}
              className={
                active == 3
                  ? "Crew--Active"
                  : "h-[10px] w-[10px] bg-white opacity-20 rounded hover:opacity-50"
              }
            ></button>
          </div>

          <div className="flex flex-col">
            <p className="font-title uppercase opacity-50 mb-1 md:text-2xl md:mb-0">
              {crew[person].role}
            </p>
            <h1 className="font-title uppercase text-2xl font-normal mb-4 md:text-[40px] md:leading-normal md:mb-2">
              {crew[person].name}
            </h1>
            <p className="font-text leading-[25px] text-[15px] text-primary md:text-base md:leading-7 ">
              {crew[person].bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
