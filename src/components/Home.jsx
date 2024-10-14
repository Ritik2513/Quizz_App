import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col">
      <nav className="bg-white bg-opacity-75 shadow-md p-4">
        <div className="container mx-auto flex justify-around items-center">
          <h1 className="text-blue-600 text-5xl font-bold">Quiz.</h1>
          <ul className="flex space-x-4">
            <Link to="/">
              <li>
                <a
                  href="/"
                  className="text-gray-700 hover:text-blue-600 transition duration-300 text-xl"
                >
                  Home
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      <div className="flex-grow flex items-center justify-center flex-col text-center">
        <h5 className="text-3xl font-semibold text-white">
          Welcome to the Placement Quiz App
        </h5>
        <p className="mt-4 text-white text-lg">
          Test your knowledge with our quizzes!
        </p>
        <Link to="/quiz-topics">
          <button className="mt-6 bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
