import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

const Result = ({ quizPup, selectedAnswer }) => {
  let [loading, setLoading] = useState(true);
  let [useAnswer, setUserAnswer] = useState("");

  const setAnswers = () => {
    setUserAnswer(selectedAnswer);
    console.log(quizPup);
    console.log(selectedAnswer);
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
      {/* <p>{quizPup.name}</p>
      <p>
        Your answer is: {useAnswer === quizPup.breed ? "correct" : "incorrect"}
      </p>
      <img
        src={quizPup.image}
        alt="right breed of dog"
        width="500"
        height="auto"
      />
      <p className="pupDescript">{quizPup.descript}</p>
      <button onClick={() => window.location.reload()}>Play Again!</button> */}
    </div>
  );
};

export default Result;
