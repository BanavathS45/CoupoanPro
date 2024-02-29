import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Edit() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigat = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/companysData/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
    axios.put("http://localhost:4000/companysData/" + id, data).then((res) => {
      //  Swal("Product Created Successfully")
      Swal.fire({
        title: "Success",
        type: "success",
        text: "Product Updated Successfully.",
      });
      navigat("/table");
    });
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <form className="col-4 " onSubmit={handleSubmit}>
        <div class="mb-3 ">
          <label htmlFor="id" class="form-label">
            ID
          </label>
          <input
            type="text"
            class="form-control"
            id="id"
            value={data.id}
            name="id"
            disabled
          />
        </div>
        <div class="mb-3 ">
          <label htmlFor="title" class="form-label">
            Company Name
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            value={data.title}
            name="title"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="url" class="form-label">
            url
          </label>
          <input
            type="text"
            class="form-control"
            id="url"
            value={data.url}
            name="url"
            onChange={(e) => setData({ ...data, url: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="update" class="form-label">
            Upadate
          </label>
          <input
            type="text"
            class="form-control"
            id="upadte"
            value={data.update}
            name="update"
            onChange={(e) => setData({ ...data, update: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Icon" className="form-label">
            Company Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={(e) =>
              setData({
                ...data,
                image: `Images/Home/${e.target.files[0].name}`,
              })
            }
            // onChange={handleFileChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default Edit;
