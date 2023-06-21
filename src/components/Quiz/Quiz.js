import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './quiz.css';


const Quiz = ({
  total,
  quizPup,
  setQuizPup,
  selectedAnswer,
  setSelectedAnswer,
}) => {

  let [loading, setLoading] = useState(true);
  //to make sure the user never gets the same quiz again, 
  //store previously generated numbers into the user's local storage
  //this will persists across page refreshes
  let [previousNums, setPreviousNums] = useState(
    JSON.parse(sessionStorage.getItem("previousNums")) || []
  );
  let navigate = useNavigate();


  // calls for random dog's data
  const quizPupHandler = async () => {
    // creates a random number which will be used as an id to call pup's data
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * total);
    } while (previousNums.includes(randomNum));

    try {
      const pup = await axios.get(`/api/pups/${randomNum}`);
      setLoading(false);
      setQuizPup(pup.data);
      //updating the number in local storage
      setPreviousNums((prevNums) => {
        const newNums = [...prevNums, randomNum];
        sessionStorage.setItem("previousNums", JSON.stringify(newNums));
        return newNums;
      });
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
      <p className="pupSays">What do you think my top 4 breeds are?</p>
      <img
        src={quizPup.image}
        alt="image of mixed breed dog"
        className="pupImage"
        width="500px"
        height="auto"
      />
      <p className="pupSays">Hi! My name is {quizPup.name}!</p>
      <p className="pupDescription">{quizPup.name}'s human says...</p>
      <p className="pupDescription">"{quizPup.description}"</p>
      <div className="multipleChoices">
        <form
          onSubmit={handerSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Take your pick!</h2>
          {quizPup.choices.map((breed, index) => {
            return (
              <div className="quiz_choices" key={index}>
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

