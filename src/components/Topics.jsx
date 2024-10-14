import React from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  const topics = [
    { name: "OSI Model", path: "/quiz-topics/osi-model" },
    { name: "TCP/IP Model", path: "/tcp-ip-model" },
    { name: "JRE, JDK, JVM", path: "/jre-jdk-jvm" },
    { name: "Cloud Computing", path: "/cloud-computing" },
    { name: "DSA", path: "/dsa" },
    { name: "Networking", path: "/networking" },
    { name: "DBMS", path: "/dbms" },
    { name: "Pseudocode", path: "/pseudocode" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Choose Topics You Want to Practice
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <Link to={topic.path} key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                <h2 className="text-2xl font-semibold text-blue-600">
                  {topic.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
