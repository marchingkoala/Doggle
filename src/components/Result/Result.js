import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './result.css'

const Result = ({ quizPup, selectedAnswer }) => {
  let [loading, setLoading] = useState(true);
  let [useAnswer, setUserAnswer] = useState("");
  let navigate = useNavigate();

  const setAnswers = () => {
    setUserAnswer(selectedAnswer);
    setLoading(false);
  };

  useEffect(() => {
    setAnswers();
  }, []);

  if (loading) {
    return <div>loading..</div>;
  }

  return (
    <div className="result_container">
      <h1>The moment of Truth!</h1>
      <div className="pup_result">
        <p>
          {useAnswer === quizPup.breed
            ? "You got me right!"
            : "Haha! You got it wrong!"}
        </p>
        <p>I am {quizPup.breed}!</p>
      </div>
      <img
        src={quizPup.image}
        alt="beautiful mixed breed pup"
        width="500"
        height="auto"
      />
      <button onClick={() => navigate("/quiz")}>Play Again!</button>
    </div>
  );
};

export default Result;
