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
    <div id="Technology">
      <p id="Technology--title">
        <span>03</span> SPACE LAUNCH 101
      </p>
      <div id="Technology--content">
        <img
          src={technology[transport].images.landscape}
          alt={`image of the ${technology[transport].name}`}
        ></img>
        <div id="Technology--content--menu">
          <button
            className={active == 0 ? "Active" : ""}
            value={0}
            onClick={handleClick}
          >
            1
          </button>
          <button
            className={active == 1 ? "Active" : ""}
            value={1}
            onClick={handleClick}
          >
            2
          </button>
          <button
            className={active == 2 ? "Active" : ""}
            value={2}
            onClick={handleClick}
          >
            3
          </button>
        </div>
        <p id="Technology--content--terminology">THE TERMINOLOGY...</p>
        <h1>{technology[transport].name}</h1>
        <p id="Technology--content--description">
          {technology[transport].description}
        </p>
      </div>
    </div>
  );
}

export default Technology;
