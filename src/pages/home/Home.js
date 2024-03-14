import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../Data/Categories";
import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../component/ErrorMessage/ErrorMessage";
function Home({ name, setName, fetchQuestion }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handelSubmit = () => {
    console.log("hey");
    if (!name || !category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestion(category, difficulty);
      navigate("/quiz");
    }
  };
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz setting</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 10 }}
            label="Enter your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="select category"
            varient="outlined"
            style={{ marginBottom: 15 }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="select difficulty"
            style={{ marginBottom: 25 }}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key="easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button variant="contained" color="primary" onClick={handelSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="quiz.svg" alt="img" className="banner" />
    </div>
  );
}

export default Home;
