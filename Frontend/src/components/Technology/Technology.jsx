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
    <div className="min-h-screen bg-technology-mobile bg-cover bg-no-repeat text-white">
      <div className="flex flex-col text-center min-h-screen bg-zinc-900 bg-opacity-25 pt-24">
        <p className="font-other text-base tracking-[2.7px]">
          <span className="opacity-25">03</span> SPACE LAUNCH 101
        </p>

        <div>
          <img
            src={technology[transport].images.landscape}
            alt={`image of the ${technology[transport].name}`}
            className="h-[170px] w-full my-8"
          ></img>

          <div className="flex justify-center gap-4 mb-6">
            <button
              className={
                active == 0
                  ? "Technology--Active"
                  : "h-10 w-10 border-2 border-white rounded-full bg-transparent border-opacity-25 hover:border-opacity-100"
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
                  : "h-10 w-10 border-2 border-white rounded-full bg-transparent border-opacity-25 hover:border-opacity-100"
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
                  : "h-10 w-10 border-2 border-white rounded-full bg-transparent border-opacity-25 hover:border-opacity-100"
              }
              value={2}
              onClick={handleClick}
            >
              3
            </button>
          </div>

          <p className="font-other text-primary tracking-[2.36px] mb-1">
            THE TERMINOLOGY...
          </p>
          <h1 className="font-title text-2xl uppercase mb-4 font-normal">
            {technology[transport].name}
          </h1>
          <p className="px-6 font-text text-primary leading-[25px] text-[15px]">
            {technology[transport].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Technology;
