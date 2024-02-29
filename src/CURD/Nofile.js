import React from "react";
import { Link } from "react-router-dom";

function Nofile() {
  return (
    <>
      <h1 style={{ color: "green", textAlign: "center" }}>404 Error</h1>
      <Link to="/">Home</Link>
    </>
  );
}

export default Nofile;
