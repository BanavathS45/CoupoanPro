import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Table from "./table";
import Create from "./Create";
import Edit from "./Edit";
// import Nofile from "./Nofile";
import Fruits from "./Fruits";

// import App from '../../App'

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="table" element={<Table />} /> */}
        <Route path="create" element={<Create />} />
        <Route path="update/:id" element={<Edit />} />
        <Route path="/" element={<Fruits />} />
        {/* <Route path="*" element={<Nofile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
