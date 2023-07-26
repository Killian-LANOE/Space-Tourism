import data from "../../../../Backend/data.json";
import { useState } from "react";

function Crew() {
  const [person, setPerson] = useState(0);
  const crew = data.crew;

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
          <button onClick={() => setPerson(0)}></button>
          <button onClick={() => setPerson(1)}></button>
          <button onClick={() => setPerson(2)}></button>
          <button onClick={() => setPerson(3)}></button>
        </div>

        <p id="Crew--content--role">{crew[person].role}</p>
        <h1>{crew[person].name}</h1>
        <p id="Crew--content--bio">{crew[person].bio}</p>
      </div>
    </div>
  );
}

export default Crew;
