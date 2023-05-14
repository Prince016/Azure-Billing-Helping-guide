import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  const [date1, setDate1] = useState([]);
  const [total, setTotal] = useState();
  const [arr, setArr] = useState([]);
  const [finaldetect, setFinaldetect] = useState([]);

  var datefinal = [];

  const obj = {
    timestamp: "",
    value: "",
  };

  var series = [];


  const GetAllBillingInfo = async () => {
    const id = localStorage.getItem("userId");
    const response = await fetch(
      `http://localhost:8080/api/v1/form-recognizer?userId=${id}`,
      {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          mode: "cors",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const json = await response.json();
    console.log(json);
    return json;
  };

  const DetectAnomaly = async () => {
    date1.map((item, i) => {
      const d = item.slice(0, 10);
      const splitscreen = d.split("-");
      console.log(splitscreen);
      const s =
        splitscreen[0] +
        "-" +
        splitscreen[2] +
        "-" +
        splitscreen[1] +
        "T00:00:00Z";

      console.log("this is the data we send ----------------------> ", s);
      datefinal.push(s);

    });

    for (var i = 0; i < date1.length; i++) {
      const obj = {
        timestamp: datefinal[i],
        value: total[i],
      };
      series.push(obj);
    }

    const finalData = {
      series: series,
      granularity: "daily",
    };

    // console.log("final series output -------------> ", series);
    console.log("final series output -------------> ", finalData);

    // --------------------> Send fetch api for the detection anaomaly <-------------------

    const response = await fetch(`http://localhost:8080/api/v1/check-anomaly`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        mode: "cors",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(finalData),
    });
    const detectionOutput = await response.json();
    setFinaldetect(detectionOutput);

    console.log(detectionOutput);
    // return json;
  };

  useEffect(() => {
    GetAllBillingInfo().then((data) => {
      const normalDate = data
        .sort(
          (a, b) => new Date(a.transactionDate) - new Date(b.transactionDate)
        )
        .map((item) => item.transactionDate);
      const totalvalue = data.map((item) => item.total);

      setDate1(normalDate);
      setTotal(totalvalue);
      setArr(data);
    });
  }, [finaldetect]);

  return (
    <div>
    
      <h3
        className="title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3"
        style={{
          color: "#1976CF",
          marginTop: "40px",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        Monthly Expense table
      </h3>

      <div style={{ padding: "40px", margin: "40px" }}>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sign No</th>
              <th scope="col">MerhantName</th>
              <th scope="col">Date</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item, i) => {
              return (
                <>
                  <tr
                    style={{
                      color: `${finaldetect[i] === true ? "red" : "black"}`,
                    }}
                    key={i}
                  >
                    <th scope="row">{i + 1}</th>
                    <td>{item.merchantName}</td>
                    <td>{item.transactionDate}</td>
                    <td>{item.total}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ textAlign: "center" }}>
        <Button color="primary" variant="contained" onClick={DetectAnomaly}>
          Get Unwanted Expenses
        </Button>
      </div>
    </div>
  );
};

export default Show;

