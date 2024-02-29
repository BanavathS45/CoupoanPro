import axios from "axios";
// import { Button } from 'bootstrap'
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { } from "react-router-dom"
import Swal from "sweetalert2";
function Table() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:4000/companysData").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-end mb-2">
        <Link to="/create" className="btn btn-primary">
          Add +
        </Link>{" "}
      </div>
      <table className="table border table-striped ">
        <thead>
          <tr className="border">
            <th>S.No</th>
            {columns.map((column, i) => (
              <th key={i}>{column}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((da, i) => (
            <tr key={i} className="border" height={"50px"}>
              <td>{i + 1}</td>
              <td>{da.id}</td>
              <td>{da.title}</td>
              <td>{da.url}</td>
              <td>{da.update}</td>
              <td width={"50px"}>
                <img src={da.image} width={"100%"} />
              </td>
              <td>
                {
                  <Link to={`/update/${da.id}`} className="btn btn-success">
                    Update
                  </Link>
                }
                {
                  <button
                    onClick={(e) => handleSubmit(da.id)}
                    className="btn btn-danger ms-2"
                  >
                    Delete
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  function handleSubmit(id) {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:4000/companysData/" + id)
        .then((res) => {
          Swal.fire({
            title: "Success",
            type: "success",
            text: "Product Deleted Successfully.",
          });
          // navigate("/store");
        })
        .catch((err) => console.log(err));
    }
  }
}
export default Table;
