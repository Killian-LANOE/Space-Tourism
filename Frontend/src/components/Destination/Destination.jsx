import data from "../../../../Backend/data.json";
import { useState } from "react";

function Destination() {
  const [planet, setPlanet] = useState(0);
  const destination = data.destinations;

  return (
    <div id="Destination">
      <p id="Destination--title">
        <span>01</span> PICK YOUR DESTINATION
      </p>
      <div id="Destination--content">
        <img
          src={destination[planet].images.png}
          alt={`image of the planet ${destination[planet].name}`}
        ></img>
        <div id="Destination--content--choice">
          <button onClick={() => setPlanet(0)}>MOON</button>
          <button onClick={() => setPlanet(1)}>MARS</button>
          <button onClick={() => setPlanet(2)}>EUROPA</button>
          <button onClick={() => setPlanet(3)}>TITAN</button>
        </div>
        <h1>{destination[planet].name}</h1>
        <p>{destination[planet].description}</p>

        <div id="Destination--content--separation"></div>
        <p className="Destination--content--infos">
          AVG. DISTANCE <span>{destination[planet].distance}</span>
        </p>
        <p className="Destination--content--infos">
          EST. TRAVEL TIME <span>{destination[planet].travel}</span>
        </p>
      </div>
    </div>
  );
}

export default Destination;
