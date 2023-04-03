import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>RESULT GOES HERE</h1>
      <p>{quizPup.name}</p>
      <p>
        Your answer is: {useAnswer === quizPup.breed ? "correct" : "incorrect"}
      </p>
      <p>{quizPup.name} is {quizPup.breed}!</p>
      <img
        src={quizPup.image}
        alt="beautiful mixed breed pup"
        width="500"
        height="auto"
      />
      <p className="pupDescript">{quizPup.descript}</p>
      <button onClick={() => navigate("/quiz")}>Play Again!</button>
    </div>
  );
};

export default Result;
