import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import "./quiz.css";
import Question from "../../component/Question/Question";
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
    <div classNmae="quiz">
      <span className="subtitle">Wellcome, {name}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>SCORE : {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{
            margin: 100,
          }}
          color="inherit"
          size={150}
          variant="indeterminate"
          fourColor
          thickness={1}
        />
      )}
    </div>
  );
}

export default Quiz;
