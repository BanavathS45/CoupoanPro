import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [inputData, setInputData] = useState({
    title: "",
    url: "",
    update: "",
    image: null,
  });
  function handleFileChange(event) {
    // const file =  event.target.files[0];
    const file = `Images/Home/${event.target.files[0].name}`;
    console.log(file);
    setInputData({ ...inputData, image: file });
  }
  const navigat = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:4000/companysData", inputData)
      .then((res) => {
        //  Swal("Product Created Successfully")
        Swal.fire({
          title: "Success",
          type: "success",
          text: "Product Created Successfully.",
        });
        navigat("/store");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Link to="/">X</Link>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <form className="col-4 " onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Icon" className="form-label">
              Company Image
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={handleFileChange}
            />
          </div>
          <div class="mb-3 ">
            <label htmlFor="exampleInputEmail1" class="form-label">
              Company Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              name="name"
              onChange={(e) =>
                setInputData({ ...inputData, title: e.target.value })
              }
            />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              Url
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="price"
              onChange={(e) =>
                setInputData({ ...inputData, url: e.target.value })
              }
            />
          </div>
          <div class="mb-3">
            <label htmlFor="Category" class="form-label">
              Updates
            </label>
            <input
              type="text"
              class="form-control"
              id="Category"
              name="category"
              onChange={(e) =>
                setInputData({ ...inputData, update: e.target.value })
              }
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Create;
