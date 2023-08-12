import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Technology";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Space-Tourism/" element={<Home />} />
        <Route path="/Space-Tourism/Destination" element={<Destination />} />
        <Route path="/Space-Tourism/Crew" element={<Crew />} />
        <Route path="/Space-Tourism/Technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
