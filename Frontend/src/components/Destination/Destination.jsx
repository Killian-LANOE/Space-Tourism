import data from "../../../../Backend/data.json";
import { useState } from "react";

function Destination() {
  const [planet, setPlanet] = useState(0);
  const destination = data.destinations;

  return (
    <div id="Destination">
      <div id="Destination--content">
        <img src={destination[planet].images.png}></img>
        <div id="Destination--content--choice">
          <button onClick={() => setPlanet(0)}>Moon</button>
          <button onClick={() => setPlanet(1)}>Mars</button>
          <button onClick={() => setPlanet(2)}>Europa</button>
          <button onClick={() => setPlanet(3)}>Titan</button>
        </div>
        <h1>{destination[planet].name}</h1>
        <p>{destination[planet].description}</p>
        <p className="Destination--content--info">
          AVG. DISTANCE <span>{destination[planet].distance}</span>
        </p>
        <p className="Destination--content--info">
          EST. TRAVEL TIME <span>{destination[planet].travel}</span>
        </p>
      </div>
    </div>
  );
}

export default Destination;
