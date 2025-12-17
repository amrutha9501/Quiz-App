import React, { useState } from 'react';
import Question from './Question';
import questionsData from "./QuestionsData.js";

const Display = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(
        Array(questionsData.length).fill(null)
    );
    const [showResults, setShowResults] = useState(false);

    const currentQuestion = questionsData[currentIndex];
    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < questionsData.length - 1;

    const btnClass =
        "px-4 py-2 rounded-md bg-[#646cff] hover:bg-[#747bff] transition disabled:opacity-50 disabled:cursor-not-allowed";

    const score = showResults
        ? selectedAnswers.reduce(
              (acc, ans, i) => ans === questionsData[i].answer ? acc + 1 : acc,
              0
          )
        : 0;

    function onSelected(answer) {
        if (showResults) return;

        const newArr = [...selectedAnswers];
        newArr[currentIndex] = answer;
        setSelectedAnswers(newArr);
    }

    function handleResults() {
        const hasUnanswered = selectedAnswers.some(ans => ans === null);
        if (hasUnanswered) {
            alert("Please attempt all questions before submitting.");
            return;
        }
        setShowResults(true);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-md p-6 bg-gray-800 rounded-xl shadow-xl">
                <h1 className="text-3xl font-bold mb-6 text-center">QUIZ APP</h1>

                <Question
                    current={currentQuestion}
                    selected={selectedAnswers[currentIndex]}
                    onSelected={onSelected}
                    showResults={showResults}
                />

                <div className="flex justify-between items-center mt-6 gap-2">
                    <button
                        onClick={() => setCurrentIndex(i => i - 1)}
                        disabled={!hasPrev}
                        className={btnClass}
                    >
                        Prev
                    </button>

                    <h4 className="text-lg font-medium">
                        Score: {score}/{questionsData.length}
                    </h4>

                    <button
                        onClick={() => setCurrentIndex(i => i + 1)}
                        disabled={!hasNext}
                        className={btnClass}
                    >
                        Next
                    </button>

                    <button
                        onClick={handleResults}
                        disabled={showResults}
                        className={btnClass}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Display;
