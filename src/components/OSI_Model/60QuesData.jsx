const questionsData = [
  {
    question: "What is the primary function of the Physical Layer?",
    options: [
      "Routing",
      "Data representation",
      "Signal transmission",
      "Session management",
    ],
    answer: "Signal transmission",
  },
  {
    question: "Which layer of the OSI model manages the data packets?",
    options: [
      "Application Layer",
      "Network Layer",
      "Data Link Layer",
      "Transport Layer",
    ],
    answer: "Network Layer",
  },
  {
    question: "At which OSI layer does TCP operate?",
    options: [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Application Layer",
    ],
    answer: "Transport Layer",
  },
  {
    question: "What is the unit of data at the Transport Layer?",
    options: ["Packet", "Segment", "Frame", "Bit"],
    answer: "Segment",
  },
  {
    question: "Which layer encapsulates data into packets?",
    options: [
      "Application Layer",
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
    ],
    answer: "Network Layer",
  },
  {
    question: "What is the role of the Data Link Layer?",
    options: [
      "Encryption and decryption",
      "Data framing and physical addressing",
      "Session management",
      "Application interfacing",
    ],
    answer: "Data framing and physical addressing",
  },
  {
    question: "Which layer handles the error correction process?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    answer: "Data Link Layer",
  },
  {
    question: "Which OSI layer is responsible for providing a user interface?",
    options: [
      "Application Layer",
      "Session Layer",
      "Transport Layer",
      "Data Link Layer",
    ],
    answer: "Application Layer",
  },
  {
    question: "Which protocol is used to send email?",
    options: ["SMTP", "HTTP", "FTP", "TCP"],
    answer: "SMTP",
  },
  {
    question: "At which OSI layer does the router operate?",
    options: [
      "Application Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    answer: "Network Layer",
  },
  {
    question: "What does the acronym MAC stand for in networking?",
    options: [
      "Media Access Control",
      "Multiple Access Channel",
      "Managed Access Control",
      "Maximum Access Control",
    ],
    answer: "Media Access Control",
  },
  {
    question: "Which layer handles the session recovery process?",
    options: [
      "Transport Layer",
      "Application Layer",
      "Session Layer",
      "Network Layer",
    ],
    answer: "Session Layer",
  },
  {
    question:
      "Which OSI layer is responsible for flow control and congestion control?",
    options: [
      "Transport Layer",
      "Data Link Layer",
      "Application Layer",
      "Network Layer",
    ],
    answer: "Transport Layer",
  },
  {
    question:
      "Which of the following protocols is not associated with the Application Layer?",
    options: ["HTTP", "FTP", "TCP", "SMTP"],
    answer: "TCP",
  },
  {
    question: "What is the primary responsibility of the Network Layer?",
    options: [
      "Establishing sessions",
      "Routing and forwarding packets",
      "Data encryption",
      "Error detection",
    ],
    answer: "Routing and forwarding packets",
  },
  {
    question: "At which OSI layer is the logical address used?",
    options: [
      "Application Layer",
      "Network Layer",
      "Data Link Layer",
      "Physical Layer",
    ],
    answer: "Network Layer",
  },
  {
    question: "Which of the following best describes the Transport Layer?",
    options: [
      "It establishes a connection between devices.",
      "It formats data for the application layer.",
      "It routes packets between networks.",
      "It provides reliable delivery of data segments.",
    ],
    answer: "It provides reliable delivery of data segments.",
  },
  {
    question:
      "Which protocol is used for transferring files over the Internet?",
    options: ["HTTP", "FTP", "IP", "TCP"],
    answer: "FTP",
  },
  {
    question: "What does the Presentation Layer primarily deal with?",
    options: [
      "Network routing",
      "Data representation and encryption",
      "Session management",
      "Flow control",
    ],
    answer: "Data representation and encryption",
  },
  {
    question: "Which OSI layer converts data into frames for transmission?",
    options: [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Application Layer",
    ],
    answer: "Data Link Layer",
  },
  {
    question: "At which layer does the SSL/TLS protocol operate?",
    options: [
      "Application Layer",
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
    ],
    answer: "Transport Layer",
  },
  {
    question: "What type of information is encapsulated by the Network Layer?",
    options: ["Segments", "Frames", "Packets", "Bits"],
    answer: "Packets",
  },
  {
    question:
      "Which OSI layer is responsible for managing connections between devices?",
    options: [
      "Transport Layer",
      "Session Layer",
      "Network Layer",
      "Data Link Layer",
    ],
    answer: "Session Layer",
  },
  {
    question:
      "Which of the following is not a function of the Data Link Layer?",
    options: [
      "Error detection",
      "Physical addressing",
      "Data encryption",
      "Framing",
    ],
    answer: "Data encryption",
  },
  {
    question: "Which OSI layer interacts directly with the user?",
    options: [
      "Application Layer",
      "Session Layer",
      "Transport Layer",
      "Network Layer",
    ],
    answer: "Application Layer",
  },
  {
    question: "Which protocol resolves IP addresses to MAC addresses?",
    options: ["ARP", "RARP", "ICMP", "DNS"],
    answer: "ARP",
  },
  {
    question: "What is the primary role of the Physical Layer?",
    options: [
      "Data segmentation",
      "Transmission of raw bitstreams over a physical medium",
      "Error detection and correction",
      "Session establishment and termination",
    ],
    answer: "Transmission of raw bitstreams over a physical medium",
  },
  {
    question: "At which OSI layer does data encapsulation first occur?",
    options: [
      "Network Layer",
      "Transport Layer",
      "Data Link Layer",
      "Application Layer",
    ],
    answer: "Transport Layer",
  },
  {
    question: "Which layer ensures that data is delivered without errors?",
    options: [
      "Application Layer",
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
    ],
    answer: "Transport Layer",
  },
  {
    question: "Which of the following is a transport layer protocol?",
    options: ["UDP", "IP", "Ethernet", "HTTP"],
    answer: "UDP",
  },
  {
    question: "What type of address does the Data Link Layer use?",
    options: ["IP Address", "MAC Address", "Host Address", "Logical Address"],
    answer: "MAC Address",
  },
  {
    question: "Which OSI layer provides error checking and recovery?",
    options: [
      "Application Layer",
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
    ],
    answer: "Data Link Layer",
  },
  {
    question: "At which layer does encryption typically take place?",
    options: [
      "Session Layer",
      "Transport Layer",
      "Application Layer",
      "Presentation Layer",
    ],
    answer: "Presentation Layer",
  },
  {
    question: "Which protocol is used for web browsing?",
    options: ["HTTP", "FTP", "SMTP", "TCP"],
    answer: "HTTP",
  },
  {
    question: "What is the main purpose of the Network Layer?",
    options: [
      "Establishing connections",
      "Routing packets across networks",
      "Data representation",
      "Error detection",
    ],
    answer: "Routing packets across networks",
  },
  {
    question:
      "Which layer is responsible for breaking data into smaller segments?",
    options: [
      "Application Layer",
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
    ],
    answer: "Transport Layer",
  },
  {
    question: "Which of the following layers is responsible for framing?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Transport Layer",
      "Network Layer",
    ],
    answer: "Data Link Layer",
  },
  {
    question: "At which OSI layer does the concept of a session exist?",
    options: [
      "Session Layer",
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
    ],
    answer: "Session Layer",
  },
  {
    question: "What does the term 'encapsulation' refer to in networking?",
    options: [
      "Wrapping data with protocol information",
      "Data compression",
      "Data encryption",
      "Session termination",
    ],
    answer: "Wrapping data with protocol information",
  },
  {
    question: "Which layer is responsible for the actual transmission of data?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    answer: "Physical Layer",
  },
  {
    question: "Which layer deals with packet switching?",
    options: [
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Application Layer",
    ],
    answer: "Network Layer",
  },
  {
    question:
      "Which OSI layer is responsible for establishing and terminating connections?",
    options: [
      "Session Layer",
      "Transport Layer",
      "Data Link Layer",
      "Network Layer",
    ],
    answer: "Session Layer",
  },
  {
    question: "What is the primary role of the Application Layer?",
    options: [
      "Managing sessions",
      "Providing services for network applications",
      "Routing packets",
      "Ensuring data integrity",
    ],
    answer: "Providing services for network applications",
  },
  {
    question:
      "Which OSI layer ensures that data packets are sequenced correctly?",
    options: [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Application Layer",
    ],
    answer: "Transport Layer",
  },
  {
    question: "At which OSI layer is the flow control managed?",
    options: [
      "Network Layer",
      "Transport Layer",
      "Data Link Layer",
      "Application Layer",
    ],
    answer: "Transport Layer",
  },
  {
    question: "Which layer is responsible for addressing packets?",
    options: [
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Physical Layer",
    ],
    answer: "Network Layer",
  },
  {
    question: "What does the acronym IP stand for?",
    options: [
      "Internet Protocol",
      "Interconnected Protocol",
      "Internal Protocol",
      "Integrated Protocol",
    ],
    answer: "Internet Protocol",
  },
  {
    question: "Which protocol is used for network troubleshooting?",
    options: ["ICMP", "TCP", "UDP", "HTTP"],
    answer: "ICMP",
  },
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
    question: "What does the Transport Layer ensure?",
    options: [
      "Data integrity",
      "Session management",
      "Network routing",
      "Data framing",
    ],
    answer: "Data integrity",
  },
  {
    question:
      "Which protocol is used to resolve IP addresses to MAC addresses?",
    options: ["ARP", "RARP", "DNS", "ICMP"],
    answer: "ARP",
  },
];

export default questionsData;
