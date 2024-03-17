import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Question.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Question({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handelSelect = (option) => {
    if (option === correct && option === selected) {
      return "select";
    } else if (selected === option && selected !== correct) {
      return "wrong";
    } else if (option === correct) {
      return "select";
    }
  };
  const handelCheck = (opt) => {
    setSelected(opt);
    if (opt === correct) {
      setScore(score + 1);
    }
    setError(false);
  };
  const handleQuit = () => {
    navigate("/");
  };
  const handleNext = () => {
    if (currQues > 3) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected("");
    } else {
      setError("Select an option first");
    }
  };

  return (
    <div className="question">
      <h2>Question : {currQues + 1}</h2>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((opt) => (
              <button
                onClick={() => handelCheck(opt)}
                className={`singleOption ${selected && handelSelect(opt)}`}
                disabled={selected}
                key={opt}
              >
                {opt}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            color="secondary"
            size="large"
            style={{ width: 185, backgroundColor: "red", color: "white" }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Question;
