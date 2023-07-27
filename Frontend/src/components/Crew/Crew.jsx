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
    <div id="Crew">
      <p id="Crew--title">
        <span>02</span> MEET YOUR CREW
      </p>
      <div id="Crew--content">
        <img
          src={crew[person].images.png}
          alt={`image of ${crew[person].name}`}
        ></img>
        <div id="Crew--content--separation"></div>

        <div id="Crew--content--menu">
          <button
            value={0}
            onClick={handleClick}
            className={active == 0 ? "Active" : ""}
          ></button>
          <button
            value={1}
            onClick={handleClick}
            className={active == 1 ? "Active" : ""}
          ></button>
          <button
            value={2}
            onClick={handleClick}
            className={active == 2 ? "Active" : ""}
          ></button>
          <button
            value={3}
            onClick={handleClick}
            className={active == 3 ? "Active" : ""}
          ></button>
        </div>

        <p id="Crew--content--role">{crew[person].role}</p>
        <h1>{crew[person].name}</h1>
        <p id="Crew--content--bio">{crew[person].bio}</p>
      </div>
    </div>
  );
}

export default Crew;
