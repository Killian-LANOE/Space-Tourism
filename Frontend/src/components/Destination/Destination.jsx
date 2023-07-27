import { useState } from "react";
import data from "../../../../Backend/data.json";

function Destination() {
  const [planet, setPlanet] = useState(0);
  const [active, setActive] = useState(0);
  const destination = data.destinations;

  function handleClick(e) {
    setPlanet(e.target.value);
    setActive(e.target.value);
  }

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
          <button
            className={active == 0 ? "Active" : ""}
            value={0}
            onClick={handleClick}
          >
            MOON
          </button>
          <button
            className={active == 1 ? "Active" : ""}
            value={1}
            onClick={handleClick}
          >
            MARS
          </button>
          <button
            className={active == 2 ? "Active" : ""}
            value={2}
            onClick={handleClick}
          >
            EUROPA
          </button>
          <button
            className={active == 3 ? "Active" : ""}
            value={3}
            onClick={handleClick}
          >
            TITAN
          </button>
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
