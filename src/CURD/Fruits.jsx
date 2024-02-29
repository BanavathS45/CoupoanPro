import React, { useState, useEffect } from "react";
import axios from "axios";
const Fruits = () => {
  const [name, setName] = useState("Buy Now");
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4200/products").then((res) => {
      setColumns(Object.keys(res.data));
      setRecords(res.data);
    });
  }, []);
  console.log(records);
  return (
    <div className="card1 d-flex justfy-content-center align-items-center">
      {records.map((item) => {
        return (
          <div className="fr">
            <h1>{item.name}</h1>
            <a href={item.icon} target="_blank">
              <img src={item.icon} width={"80%"}></img>
            </a>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              totam nesciunt eaque quos quas magni recusandae ipsam quo
              repudiandae atque.
            </p>
            <h3>$&nbsp;{item.price}</h3>
            <button onClick={() => setName("Added")} className="btn btn-info">
              {name}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Fruits;
