const questionsData = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A database",
      "A JavaScript library",
      "A backend framework",
      "A programming language"
    ],
    answer: "A JavaScript library"
  },
  {
    id: 2,
    question: "Which hook is used for state in React?",
    options: ["useEffect", "useRef", "useState", "useMemo"],
    answer: "useState"
  },
  {
    id: 3,
    question: "What is used to pass data from parent to child?",
    options: ["State", "Hooks", "Props", "Context"],
    answer: "Props"
  },
  {
    id: 4,
    question: "Which hook runs after component render?",
    options: ["useState", "useEffect", "useCallback", "useReducer"],
    answer: "useEffect"
  },
  {
    id: 5,
    question: "React components must start with?",
    options: [
      "Lowercase letter",
      "Number",
      "Uppercase letter",
      "Special character"
    ],
    answer: "Uppercase letter"
  }
];

export default questionsData;
