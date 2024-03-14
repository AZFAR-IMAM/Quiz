import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

function Quiz({ name, score, setScore, questions, setQuestions }) {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handelSuffel([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);
  console.log(options);
  const handelSuffel = (opt) => {
    return opt.sort(() => Math.random() - 0.5);
  };
  return (
    <div>
      <span className="subtitle">WELLCOME, {name}</span>
      {questions ? (
        <></>
      ) : (
        <CircularProgress style={{ margin: 100 }} color="inherit" size={150} />
      )}
    </div>
  );
}

export default Quiz;
