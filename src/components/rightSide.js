import React, { useState } from 'react';
import methaliQns from '../questions';

function RightSide(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleOptionClick = (selectedOption) => {
        if(selectedOption === methaliQns[currentQuestion].correctAnswer){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;

        if(nextQuestion < methaliQns.length){
            setCurrentQuestion(nextQuestion);
        }else {
            // If there are no more questions, it's time to display the "Quiz Completed!" section.
            // Make sure the component re-renders by setting the state to a different value (e.g., -1).
            setCurrentQuestion(-1);
          }
    }

    const startAgain = () => {
        setCurrentQuestion(0);
        setScore(0);
    }

    return (
        <div className="right-box">
          {currentQuestion >= 0 ? (
            <div className='methali-box'>
              <h2 className='methali-no'>Question {currentQuestion + 1}</h2>
              <p className='methali-qn'>{methaliQns[currentQuestion].question}</p>
              <ul>
                {methaliQns[currentQuestion].options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className='complete'>
              <h2>Quiz Completed!</h2>
              <p className="qn-complete">Your Score: {score} out of {methaliQns.length}</p>
              <button className='btn' onClick={() => startAgain()}>Start again</button>
            </div>
          )}
        </div>
      );
}

export default RightSide;
