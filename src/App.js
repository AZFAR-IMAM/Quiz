import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";
import { useState } from "react";
import axios from "axios";

function App(category, difficulty) {
  const [name, setName] = useState("azfar");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestion = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };
  return (
    <div
      className="app"
      style={{ background: "url(./j.jpg) no-repeat center center/cover" }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestion={fetchQuestion}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                setQuestions={setQuestions}
                score={score}
                setScore={setScore}
              />
            }
          />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
