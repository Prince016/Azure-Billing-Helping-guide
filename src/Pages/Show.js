import React from "react";
import Select from "react-select";

const options = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const Show = () => {
  return (
    <div>
      <div
        style={{
          width: "300px",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "100px",
        }}
      >
        <Select sx={{ innerWidth: "220px" }} options={options} />
      </div>

      <div style={{ padding:"40px" ,margin:"40px" }} >
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sign No</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>

       
      </div>
    </div>
  );
};

export default Show;
