import React from "react";
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Store from "./Store";
// -------------Blogs-------------------
import Blog from "./Blog";
import Delcutter from "./Blogs/Delcutter";
import GardeningExperience from "./Blogs/GardeningExperience";
// -------------single pages-------------
import Astarinchimes from "../src/singles/Astarinchimes";
import Glamermaid from "../src/singles/glamermaid";
import Joybos from "../src/singles/Joybos";
import Boderry from "../src/singles/boderry";
import Guduchi from "../src/singles/Guduchi";
import Luxe from "../src/singles/Luxe";
import Petcam from "../src/singles/MrPetcam";
import Pineapple from "../src/singles/Pineapple";
import Proteck from "../src/singles/Proteck";
import PyroFarms from "../src/singles/PyroFarms";
import RhinoUSA from "../src/singles/RhinoUSA";
import RYZE from "../src/singles/RYZE";
import Sybotanica from "../src/singles/Sybotanica";
import Tattooing from "../src/singles/Tattooing";
import Tempest from "../src/singles/Tempest";
import TesgoCA from "../src/singles/TesGo";
import Triggered from "../src/singles/Triggered";
import Uvlizer from "../src/singles/Uvlizer";
import VitaHotDeals from "../src/singles/VitaHotDeals";
import Yose from "../src/singles/Yose";
// ==================curd=========
import Table from "./CURD/table";
import Create from "./CURD/Create";
import Edit from "./CURD/Edit";
import Nofile from "./CURD/Nofile";
// import Fruits from "./CURD/Fruits";
import Login from "./CURD/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        {/* ----------------Blog---------------------- */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/Delcutter" element={<Delcutter />} />
        <Route
          path="/blog/GardeningExperience"
          element={<GardeningExperience />}
        />
        {/* --------------Single Page------------------ */}
        <Route path="/store/astarinchimes" element={<Astarinchimes />} />
        <Route path="/store/glamermaid" element={<Glamermaid />} />
        <Route path="/store/joybos" element={<Joybos />} />
        <Route path="/store/boderry" element={<Boderry />} />
        <Route path="/store/guduchi" element={<Guduchi />} />
        <Route path="/store/luxe" element={<Luxe />} />
        <Route path="/store/petcam" element={<Petcam />} />
        <Route path="/store/pineapple" element={<Pineapple />} />
        <Route path="/store/proteck" element={<Proteck />} />
        <Route path="/store/pyroFarms" element={<PyroFarms />} />
        <Route path="/store/rhinoUSA" element={<RhinoUSA />} />
        <Route path="/store/rYZE" element={<RYZE />} />
        <Route path="/store/sybotanica" element={<Sybotanica />} />
        <Route path="/store/tattooing" element={<Tattooing />} />
        <Route path="/store/tempest" element={<Tempest />} />
        <Route path="/store/tesgoCA" element={<TesgoCA />} />
        <Route path="/store/triggered" element={<Triggered />} />
        <Route path="/store/uvlizer" element={<Uvlizer />} />
        <Route path="/store/vitaHotDeals" element={<VitaHotDeals />} />
        <Route path="/store/yose" element={<Yose />} />
        {/* --------------crud--------------- */}

        <Route path="/table" element={<Table />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Edit />} />
        {/* <Route path="/" element={<Fruits />} /> */}
        <Route path="/*" element={<Nofile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
