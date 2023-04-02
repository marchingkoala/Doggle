import React, {useEffect, useState} from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz/Quiz';
import axios from 'axios';
import Result from './Result';


const App = () => {

    // let [pups, setPups] = useState([]);
    let [quizPup, setQuizPup] = useState({});
    let [total, setTotal] = useState(0);
    let [loading, setLoading] = useState(true);
    let [selectedAnswer, setSelectedAnswer] = useState("");

    const pupHandler = async () => {
      let { data } = await axios.get("/api/pups");
      // setPups(data);
      setTotal(data.length);
      setLoading(false);
    };

    useEffect(() => {
      pupHandler();
    }, []);

    if (loading) {
      return <div>loading</div>;
    }

    return (
      <div>
        <h1>DOGGLE!</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/quiz">Quiz</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home loading={loading} />}></Route>
          <Route
            path="/quiz"
            element={
              <Quiz
                total={total}
                quizPup={quizPup}
                setQuizPup={setQuizPup}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
              />
            }
          ></Route>
          <Route
            path="/result"
            element={
              <Result selectedAnswer={selectedAnswer} quizPup={quizPup} />
            }
          ></Route>
        </Routes>
        <div>
          <h2>THIS IS WHERE FOOTER WILL GO</h2>
        </div>
      </div>
    );
};

export default App;