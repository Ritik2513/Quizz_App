import React from "react";
import { Link } from "react-router-dom";

const Osi = () => {
  const handleQuestionSelection = (num) => {
    // Here you can handle the selection, for example, saving it to state or passing it to another component
    console.log(`Selected: ${num} questions`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-300 flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Choose Number of Questions
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/quiz-topics/osi-model/top-10" onClick={() => handleQuestionSelection(10)}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h2 className="text-2xl font-semibold text-blue-600">
                Top 10 Questions
              </h2>
            </div>
          </Link>
          <Link to="/quiz-topics/osi-model/top-30" onClick={() => handleQuestionSelection(20)}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h2 className="text-2xl font-semibold text-blue-600">
                Top 30 Questions
              </h2>
            </div>
          </Link>
          <Link to="/quiz-topics/osi-model/top-60" onClick={() => handleQuestionSelection(50)}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h2 className="text-2xl font-semibold text-blue-600">
                Top 60 Questions
              </h2>
            </div>
          </Link>
          <Link to="/quiz-topics/osi-model/top-100" onClick={() => handleQuestionSelection(100)}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h2 className="text-2xl font-semibold text-blue-600">
                Top 100 Questions
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Osi;
