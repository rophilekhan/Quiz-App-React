import React, { useState } from 'react';
import quizData from '../quizData';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h1>Quiz Complete!</h1>
          <p>Your final score is {score} out of {quizData.length}.</p>

        </div>
      ) : 
      (
        <div>
          <h1>Quiz App</h1>
          <p>Question {currentQuestion + 1} of {quizData.length}</p>
          <h2>{quizData[currentQuestion].question}</h2>
          <ul>
            {quizData[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </li>
            ))
            }
          </ul>
        </div>

      )
      }
    </div>
  );
};

export default Quiz;