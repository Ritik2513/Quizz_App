import React, { useState, useEffect } from "react";
import QuestionList from "./QuestionList";
import "./Quiz.css";

// Utility function to shuffle an array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Quiz = () => {
  const questionsData = [
    {
      question: "What is React?",
      options: ["Library", "CSS Framework", "Framework", "Testing Tool"],
      answer: "Library",
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading System Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which of the following is a NoSQL database?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
      answer: "MongoDB",
    },
    {
      question: "Which method is used to fetch data in React?",
      options: [
        "componentDidMount",
        "useEffect",
        "fetchData",
        "componentDidFetch",
      ],
      answer: "useEffect",
    },
    {
      question: "What is JSX in React?",
      options: [
        "A JavaScript Extension",
        "A database",
        "A CSS library",
        "A Testing tool",
      ],
      answer: "A JavaScript Extension",
    },
    {
      question: "Which company maintains React?",
      options: ["Google", "Microsoft", "Facebook (Meta)", "Amazon"],
      answer: "Facebook (Meta)",
    },
    {
      question: "Which of these is used for version control?",
      options: ["Git", "Node.js", "React", "Express"],
      answer: "Git",
    },
    {
      question: "What is the command to start a React app?",
      options: ["npm start", "node start", "react-run", "npm install"],
      answer: "npm start",
    },
  ];

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
