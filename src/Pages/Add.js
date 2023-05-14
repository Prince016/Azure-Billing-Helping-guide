import React from "react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@mui/material";

const Add = () => {
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const Uploadfiles = async () => {
    const response = await fetch(
      `http://localhost:8080/api/v1/form-recognizer?userId=1`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(val),
      }
    );
    const json = await response.json();

    console.log(json);
  };

  return (
    <>
      <div className="add-section">
        <h3
          className="title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3"
          style={{ color: "#1976CF", marginTop: "10px", fontSize: "40px" }}
        >
          Upload Files
        </h3>

        <div className="add-image" >
          <input
            className="input_imageLink"
            type="text"
            onChange={handleChange}
          />

          <Button className="upload-btn" variant="contained" onClick={Uploadfiles}>
            Upload
          </Button>
        </div>
      </div>
    </>
  );
};

export default Add;
