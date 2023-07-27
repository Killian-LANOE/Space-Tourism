import { useState } from "react";
import data from "../../../../Backend/data.json";

function Technology() {
  const [transport, setTransport] = useState(0);
  const technology = data.technology;

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
          <button onClick={() => setTransport(0)}>1</button>
          <button onClick={() => setTransport(1)}>2</button>
          <button onClick={() => setTransport(2)}>3</button>
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
