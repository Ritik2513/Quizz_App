import React, { useState, useEffect } from "react";
import Top10QuesList from "../OSI_Model/Top10QuestList";
import questionsData from "../OSI_Model/10QuesData"
import "../Quiz.css";

// Utility function to shuffle an array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Top10Ques = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(""); // New state for answer status

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
    setAnswerStatus(""); // Reset the answer status
  };

  const handleNextQuestion = () => {
    // Check if the answer is correct
    if (currentAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
      setAnswerStatus("Correct!"); // Set status to correct
    } else {
      setAnswerStatus(
        `Incorrect! The correct answer is: ${questions[currentQuestionIndex].answer}`
      ); // Set status to incorrect with the correct answer
    }

    // Move to the next question after a short delay to show the status
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(null);
      setAnswerStatus(""); // Reset answer status for the next question
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="quiz-container">
      {currentQuestionIndex < questions.length ? (
        <div className="question-section">
          <h3>
            Question {currentQuestionIndex + 1} of {questions.length}
          </h3>
          <Top10QuesList
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
          {answerStatus && <div className="answer-status">{answerStatus}</div>} {/* Display the answer status */}
        </div>
      ) : (
        <div className="score-section">Your Score is {score}</div>
      )}
    </div>
  );
};

export default Top10Ques;
