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
      question: "How many layers are there in the OSI Model?",
      options: ["5", "7", "6", "8"],
      answer: "7",
    },
    {
      question:
        "Which layer of the OSI model is responsible for establishing, managing, and terminating connections between applications?",
      options: [
        "Transport Layer",
        "Network Layer",
        "Session Layer",
        "Application Layer",
      ],
      answer: "Session Layer",
    },
    {
      question:
        "Which layer of the OSI model is responsible for data encryption?",
      options: [
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
        "Presentation Layer",
      ],
      answer: "Presentation Layer",
    },
    {
      question:
        "In the OSI model, which layer is responsible for routing packets across different networks?",
      options: [
        "Physical Layer",
        "Network Layer",
        "Data Link Layer",
        "Application Layer",
      ],
      answer: "Network Layer",
    },
    {
      question: "At which OSI layer does IP operate?",
      options: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
      ],
      answer: "Network Layer",
    },
    {
      question:
        "Which of the following OSI layers handles flow control and error control at the segment level?",
      options: [
        "Data Link Layer",
        "Transport Layer",
        "Network Layer",
        "Application Layer",
      ],
      answer: "Transport Layer",
    },
    {
      question:
        "Which protocol operates at the Transport Layer of the OSI model?",
      options: ["HTTP", "TCP", "IP", "ARP"],
      answer: "TCP",
    },
    {
      question: "What is the unit of data called at the Data Link Layer?",
      options: ["Packet", "Frame", "Segment", "Bit"],
      answer: "Frame",
    },
    {
      question:
        "Which OSI layer converts the electrical signals into data frames?",
      options: [
        "Physical Layer",
        "Data Link Layer",
        "Transport Layer",
        "Network Layer",
      ],
      answer: "Data Link Layer",
    },
    {
      question: "At which layer does the MAC address operate in the OSI model?",
      options: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
      ],
      answer: "Data Link Layer",
    },
    {
      question:
        "The OSI model layer responsible for providing a user interface is the:",
      options: [
        "Application Layer",
        "Transport Layer",
        "Presentation Layer",
        "Session Layer",
      ],
      answer: "Application Layer",
    },
    {
      question:
        "Which of the following is a function of the Presentation Layer?",
      options: [
        "Path determination",
        "Data encryption",
        "Flow control",
        "Routing",
      ],
      answer: "Data encryption",
    },
    {
      question:
        "In the OSI model, segmentation of data and reassembly of data occurs at which layer?",
      options: [
        "Transport Layer",
        "Data Link Layer",
        "Network Layer",
        "Application Layer",
      ],
      answer: "Transport Layer",
    },
    {
      question:
        "Which layer of the OSI model ensures that communications between devices are secure, reliable, and in sync?",
      options: [
        "Transport Layer",
        "Data Link Layer",
        "Session Layer",
        "Application Layer",
      ],
      answer: "Session Layer",
    },
    {
      question:
        "What is the primary responsibility of the Physical Layer in the OSI model?",
      options: [
        "Error detection",
        "Media access control",
        "Data encoding",
        "Signal transmission",
      ],
      answer: "Signal transmission",
    },
    {
      question:
        "Which protocol operates at the Network Layer of the OSI model?",
      options: ["UDP", "TCP", "IP", "SMTP"],
      answer: "IP",
    },
    {
      question:
        "Which layer in the OSI model is responsible for determining the best path to send packets?",
      options: [
        "Application Layer",
        "Transport Layer",
        "Network Layer",
        "Data Link Layer",
      ],
      answer: "Network Layer",
    },
    {
      question:
        "Which layer of the OSI model deals with the physical connection between two devices?",
      options: [
        "Data Link Layer",
        "Physical Layer",
        "Network Layer",
        "Transport Layer",
      ],
      answer: "Physical Layer",
    },
    {
      question:
        "Which layer is responsible for end-to-end communication and reliability in the OSI model?",
      options: [
        "Data Link Layer",
        "Transport Layer",
        "Network Layer",
        "Session Layer",
      ],
      answer: "Transport Layer",
    },
    {
      question:
        "The Application Layer of the OSI model communicates with which layer in the OSI model?",
      options: [
        "Presentation Layer",
        "Transport Layer",
        "Network Layer",
        "Data Link Layer",
      ],
      answer: "Presentation Layer",
    },
    {
      question:
        "Which OSI layer is responsible for translating data between the network and application layers?",
      options: [
        "Session Layer",
        "Transport Layer",
        "Presentation Layer",
        "Data Link Layer",
      ],
      answer: "Presentation Layer",
    },
    {
      question:
        "In the OSI model, which layer is responsible for logical addressing?",
      options: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Session Layer",
      ],
      answer: "Network Layer",
    },
    {
      question:
        "The protocol used to translate domain names into IP addresses works at which OSI layer?",
      options: [
        "Application Layer",
        "Transport Layer",
        "Network Layer",
        "Session Layer",
      ],
      answer: "Application Layer",
    },
    {
      question:
        "Which OSI layer is responsible for providing reliable communication through error correction, flow control, and retransmission?",
      options: [
        "Network Layer",
        "Data Link Layer",
        "Transport Layer",
        "Application Layer",
      ],
      answer: "Transport Layer",
    },
    {
      question:
        "Which layer of the OSI model specifies voltage, wire speed, and cable pinouts?",
      options: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
      ],
      answer: "Physical Layer",
    },
    {
      question:
        "In the OSI model, the responsibility of encapsulating frames into bits falls to which layer?",
      options: [
        "Network Layer",
        "Data Link Layer",
        "Physical Layer",
        "Presentation Layer",
      ],
      answer: "Physical Layer",
    },
    {
      question:
        "Which layer of the OSI model is involved in token management and dialog control?",
      options: [
        "Session Layer",
        "Data Link Layer",
        "Network Layer",
        "Physical Layer",
      ],
      answer: "Session Layer",
    },
    {
      question:
        "Error detection at the frame level is done at which OSI layer?",
      options: [
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
        "Application Layer",
      ],
      answer: "Data Link Layer",
    },
    {
      question:
        "The process of segmenting and reassembling data is handled by which OSI layer?",
      options: [
        "Network Layer",
        "Application Layer",
        "Transport Layer",
        "Data Link Layer",
      ],
      answer: "Transport Layer",
    },
    {
      question:
        "What type of addressing is used at the Network Layer of the OSI model?",
      options: [
        "MAC Addressing",
        "Port Addressing",
        "IP Addressing",
        "None of the above",
      ],
      answer: "IP Addressing",
    },
    {
      question:
        "Which of the following tasks is performed by the Data Link Layer?",
      options: ["Routing", "Frame formatting", "Port management", "Encryption"],
      answer: "Frame formatting",
    },
    {
      question:
        "Which layer of the OSI model provides services directly to the user?",
      options: [
        "Transport Layer",
        "Session Layer",
        "Network Layer",
        "Application Layer",
      ],
      answer: "Application Layer",
    },
    {
      question:
        "Which layer in the OSI model handles the conversion of data formats, including compression?",
      options: [
        "Application Layer",
        "Presentation Layer",
        "Session Layer",
        "Data Link Layer",
      ],
      answer: "Presentation Layer",
    },
    {
      question: "Flow control is implemented at which layer of the OSI model?",
      options: [
        "Data Link Layer",
        "Physical Layer",
        "Network Layer",
        "Application Layer",
      ],
      answer: "Data Link Layer",
    },
    {
      question: "What is the name of the protocol unit at the Network Layer?",
      options: ["Segment", "Datagram", "Frame", "Packet"],
      answer: "Packet",
    },
    {
      question:
        "Which layer manages access to network media and physical transmission?",
      options: [
        "Application Layer",
        "Network Layer",
        "Data Link Layer",
        "Physical Layer",
      ],
      answer: "Physical Layer",
    },
    {
      question:
        "In the OSI model, which layer establishes, manages, and synchronizes dialogs between communicating systems?",
      options: [
        "Transport Layer",
        "Session Layer",
        "Data Link Layer",
        "Network Layer",
      ],
      answer: "Session Layer",
    },
    {
      question:
        "The Network Layer in the OSI model provides which of the following functions?",
      options: ["Encryption", "Flow control", "Routing", "Error detection"],
      answer: "Routing",
    },
    {
      question:
        "Which of the following is a characteristic of the Transport Layer?",
      options: [
        "Path determination",
        "Flow control",
        "MAC addressing",
        "Physical media transmission",
      ],
      answer: "Flow control",
    },
    {
      question: "The Data Link Layer is divided into which two sublayers?",
      options: [
        "Logical Link Control and Media Access Control",
        "Network Control and Transport Control",
        "Physical and Data Sublayer",
        "Application and Presentation",
      ],
      answer: "Logical Link Control and Media Access Control",
    },
    {
      question:
        "Which layer of the OSI model is responsible for segmentation and reassembly of data?",
      options: [
        "Network Layer",
        "Transport Layer",
        "Data Link Layer",
        "Physical Layer",
      ],
      answer: "Transport Layer",
    },
    {
      question:
        "Which OSI layer handles the conversion of data formats, including encryption and decryption?",
      options: [
        "Network Layer",
        "Presentation Layer",
        "Application Layer",
        "Session Layer",
      ],
      answer: "Presentation Layer",
    },
    {
      question: "The unit of transmission in the Physical Layer is:",
      options: ["Frame", "Packet", "Bit", "Segment"],
      answer: "Bit",
    },
    {
      question:
        "What is the PDU (Protocol Data Unit) at the Data Link Layer called?",
      options: ["Packet", "Frame", "Segment", "Bit"],
      answer: "Frame",
    },
    {
      question: "The Data Link Layer works with:",
      options: [
        "MAC addresses",
        "IP addresses",
        "Port numbers",
        "Domain names",
      ],
      answer: "MAC addresses",
    },
    {
      question: "The Transport Layer provides which of the following services?",
      options: [
        "Encryption and decryption",
        "End-to-end communication and error recovery",
        "Frame synchronization",
        "MAC addressing",
      ],
      answer: "End-to-end communication and error recovery",
    },
    {
      question:
        "Which OSI layer is responsible for the error-free delivery of frames?",
      options: [
        "Data Link Layer",
        "Network Layer",
        "Application Layer",
        "Session Layer",
      ],
      answer: "Data Link Layer",
    },
    {
      question:
        "Which of the following occurs at the Physical Layer of the OSI model?",
      options: [
        "Routing",
        "Media type selection",
        "MAC addressing",
        "Packet switching",
      ],
      answer: "Media type selection",
    },
    {
      question:
        "Which OSI layer coordinates communications between systems by providing dialog control?",
      options: [
        "Data Link Layer",
        "Application Layer",
        "Session Layer",
        "Transport Layer",
      ],
      answer: "Session Layer",
    },
    {
      question: "What is the purpose of encapsulation in the OSI model?",
      options: [
        "To convert data from bits to frames",
        "To ensure error-free data transmission",
        "To add protocol-specific information to each layer",
        "To route data between different networks",
      ],
      answer: "To add protocol-specific information to each layer",
    },
    {
      question:
        "Which OSI layer interacts directly with the user’s applications?",
      options: [
        "Data Link Layer",
        "Application Layer",
        "Transport Layer",
        "Network Layer",
      ],
      answer: "Application Layer",
    },
    {
      question:
        "Which layer handles packet sequencing, acknowledgment, and retransmission?",
      options: [
        "Network Layer",
        "Data Link Layer",
        "Transport Layer",
        "Physical Layer",
      ],
      answer: "Transport Layer",
    },
    {
      question: "What does the acronym OSI stand for?",
      options: [
        "Open Source Interface",
        "Open Systems Interconnection",
        "Online Systems Integration",
        "Optimal Systems Integration",
      ],
      answer: "Open Systems Interconnection",
    },
    {
      question:
        "Which layer is responsible for data compression in the OSI model?",
      options: [
        "Session Layer",
        "Presentation Layer",
        "Data Link Layer",
        "Network Layer",
      ],
      answer: "Presentation Layer",
    },
    {
      question: "Which layer of the OSI model is known as the 'media' layer?",
      options: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
      ],
      answer: "Physical Layer",
    },
    {
      question: "What is the main function of the Application Layer?",
      options: [
        "Error detection and correction",
        "Data encryption and decryption",
        "End-user application interface",
        "Routing",
      ],
      answer: "End-user application interface",
    },
    {
      question:
        "The session layer works in conjunction with which layer for data synchronization?",
      options: [
        "Transport Layer",
        "Network Layer",
        "Data Link Layer",
        "Presentation Layer",
      ],
      answer: "Transport Layer",
    },
    {
      question:
        "Which layer is the first one that receives incoming data from another network?",
      options: [
        "Network Layer",
        "Transport Layer",
        "Data Link Layer",
        "Physical Layer",
      ],
      answer: "Physical Layer",
    },
    {
      question:
        "What is the primary role of the Logical Link Control (LLC) sublayer in the OSI model?",
      options: [
        "Frame synchronization",
        "Flow control",
        "Media access control",
        "Bit transmission",
      ],
      answer: "Flow control",
    },
    {
      question:
        "Which layer ensures data is transferred between two devices without errors?",
      options: [
        "Data Link Layer",
        "Session Layer",
        "Presentation Layer",
        "Network Layer",
      ],
      answer: "Data Link Layer",
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
