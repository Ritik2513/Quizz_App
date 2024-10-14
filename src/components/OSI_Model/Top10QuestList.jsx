import React from "react";

const Top10QuestionList = ({ question, options, handleClick, currentAnswer }) => {
  return (
    <div className="question-list">
      <h2 className="question-text">{question}</h2>
      <ul className="options-list">
        {options.map((option, index) => {
          return (
            <li
              key={index}
              onClick={() => handleClick(option)}
              className={`option-item ${currentAnswer === option ? "selected" : ""}`}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Top10QuestionList;
