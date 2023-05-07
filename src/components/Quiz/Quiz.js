import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './quiz.css';


const Quiz = ({
  total,
  quizPup,
  setQuizPup,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  // creates a random number which will be used as an id to call pup's data
  let randomNum = Math.floor(Math.random() * total);
  let [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  // calls for random dog's data
  const quizPupHandler = async () => {
    try {
      const pup = await axios.get(`/api/pups/${randomNum}`);
      setLoading(false);
      setQuizPup(pup.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // takes in the selected value & set into the selectedAnswer
  const quizHandler = (event) => {
    // this allows user to check the box and then un-check it
    setSelectedAnswer(
      selectedAnswer === event.target.value ? "" : event.target.value
    );
  };

  // navigate the user to the result page when they click the submit button
  const handerSubmit = (event) => {
    event.preventDefault();
    navigate("/result");
  };

  useEffect(() => {
    quizPupHandler();
  }, []);

  if (loading) {
    return <div>loading..</div>;
  }

  return (
    <div className="quiz_body">
      <h2>Guess the breed!</h2>
      <p>What do you think the top 4 breeds are?</p>
      <img
        src={quizPup.image}
        alt="image of mixed breed dog"
        className="pupImage"
        width="500px"
        height="auto"
      />
      <p className="pupName">Name: {quizPup.name}</p>
      <p className="pupDescription">"{quizPup.description}"</p>
      <div className="multipleChoices">
        <form onSubmit={handerSubmit}>
          <h2>Take your pick!</h2>
          {quizPup.choices.map((breed, index) => {
            return (
              <div key={index}>
                <label className="checkboxOptionLabel">
                  <input
                    type="checkbox"
                    name="answer"
                    value={breed}
                    checked={selectedAnswer === breed}
                    onChange={quizHandler}
                  />
                  {breed}
                </label>
              </div>
            );
          })}
          <button type="submit">I made my choice!</button>
        </form>
      </div>
    </div>
  );
};

export default Quiz;

