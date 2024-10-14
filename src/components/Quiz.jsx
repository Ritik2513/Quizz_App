import React, { useState, useEffect } from "react";
import QuestionList from "./QuestionList";
import "./Quiz.css";
import questionsData from "./QuestionData";

// Utility function to shuffle an array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Shuffle the questions when the component mounts
    const shuffledQuestions = shuffleArray([...questionsData]);

    // Shuffle the options for each question
    const shuffledQuestionsWithOptions = shuffledQuestions.map((question) => {
      return {
        ...question,
        options: shuffleArray([...question.options]), // Shuffle the options
      };
    });

    setQuestions(shuffledQuestionsWithOptions);
  }, []);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };

  return (
    <div className="quiz-container">
      {currentQuestionIndex < questions.length ? (
        <div className="question-section">
          <h3>
            Question {currentQuestionIndex + 1} of {questions.length}
          </h3>
          <QuestionList
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />
          <button
            disabled={currentAnswer === null}
            className={`quiz-button ${
              currentAnswer === null ? "button-disabled" : ""
            }`}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div className="score-section">Your Score is {score}</div>
      )}
    </div>
  );
};

export default Quiz;
