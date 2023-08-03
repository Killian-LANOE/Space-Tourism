import data from "../../../../Backend/data.json";
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
    <div className="min-h-screen bg-crew-mobile bg-cover bg-no-repeat text-white">
      <div className="min-h-screen mx-auto flex flex-col text-center items-center pt-24 bg-zinc-900 bg-opacity-25">
        <p className="font-other tracking-[2.7px] mb-8">
          <span className="mr-4 opacity-25">02</span> MEET YOUR CREW
        </p>
        <div>
          <img
            src={crew[person].images.png}
            alt={`image of ${crew[person].name}`}
            className="h-[222px] w-auto mx-auto"
          ></img>
          <div className="h-px w-11/12 opacity-20 bg-white mb-8 mx-auto"></div>

          <div className="flex justify-center gap-5 mb-8">
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

          <p className="font-title uppercase opacity-50">{crew[person].role}</p>
          <h1 className="font-title uppercase text-2xl font-normal mb-6">
            {crew[person].name}
          </h1>
          <p className="font-text leading-[25px] text-base text-primary px-9 pb-8">
            {crew[person].bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Crew;
