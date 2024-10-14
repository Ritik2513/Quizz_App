import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Osi from "./components/OSI_Model/Osi";
import Top10Ques from "./components/OSI_Model/Top10Ques";
import Top30Ques from "./components/OSI_Model/Top30Ques";
import Top60Ques from "./components/OSI_Model/Top60Ques";
import Top100Ques from "./components/OSI_Model/Top100Ques";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-topics" element={<Topics />} />
        <Route path="/quiz-topics/osi-model" element={<Osi />} />
        <Route path="/quiz-topics/osi-model/top-10" element={<Top10Ques />} />
        <Route path="/quiz-topics/osi-model/top-30" element={<Top30Ques />} />
        <Route path="/quiz-topics/osi-model/top-60" element={<Top60Ques />} />
        <Route path="/quiz-topics/osi-model/top-100" element={<Top100Ques />} />
      </Routes>
    </div>
  );
};

export default App;
