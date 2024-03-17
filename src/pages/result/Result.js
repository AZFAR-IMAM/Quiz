// import { useEffect } from "react";
import "./Result.css";
// import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"; // Import Link component

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (name === undefined || name === null) {
  //     navigate("/");
  //   }
  // }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Final Score: {score}</span>
      <button
        onClick={() => navigate("/")}
        style={{
          width: "100px",
          height: "40px",
          margin: "10px auto",
          cursor: "pointer",
        }}
      >
        home
      </button>
    </div>
  );
};

export default Result;
