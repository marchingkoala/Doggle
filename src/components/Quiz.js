import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './quiz.css';
const Quiz = ({total}) => {

    let randomNum = Math.floor(Math.random() * total)
    let [quizPup, setQuizPup] = useState({});
    let [loading, setLoading] = useState(true);
    let [selectedAnswer, setSelectedAnswer] = useState("");

    const quizPupHandler = async () =>{
      const pup = await axios.get(`/api/pups/${randomNum}`)
      setLoading(false)
      setQuizPup(pup.data)
      console.log(pup.data);
    }

    const quizHandler = (event) => {
      // this allows user to check the box and then un-check it
      setSelectedAnswer(selectedAnswer === event.target.value ? "": event.target.value);
    }

    const handerSubmit = (event) =>{
      event.preventDefault();
      console.log(selectedAnswer);
    }

    useEffect(()=>{
      quizPupHandler();
    }, [])

    if(loading){ return(<div>loading..</div>)}
    return (
      <div>
        <h2>QUIZ!!</h2>
        <p>Guess the breed!</p>
        <img
          src={quizPup.image}
          alt="image of mixed breed dog"
          className="pupImage"
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
            <button type="submit">I made my choice</button>
          </form>
        </div>
      </div>
    );
};

export default Quiz;