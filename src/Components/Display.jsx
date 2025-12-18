import React, { useState } from 'react';
import Question from './Question';
import questionsData from "./QuestionsData.js";
import Button from './Button.jsx';

const Display = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(
        Array(questionsData.length).fill(null)
    );
    const [showResults, setShowResults] = useState(false);

    const currentQuestion = questionsData[currentIndex];

    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < questionsData.length - 1;

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

    function restartQuiz() {
        setSelectedAnswers(Array(questionsData.length).fill(null));
        setCurrentIndex(0);
        setShowResults(false);
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-md p-6 bg-gray-800 rounded-xl shadow-xl">
                <h1 className="text-3xl font-bold mb-6 text-center">QUIZ APP</h1>

                <Question
                    current={currentQuestion}
                    onSelected={onSelected}
                    selected={selectedAnswers[currentIndex]}
                    showResults={showResults}
                />

                <div className="flex justify-between items-center mt-6 gap-2">
                    <Button onClick={() => setCurrentIndex(i => i - 1)} disabled={!hasPrev} value="Prev" />

                    <h4 className="text-lg font-medium">
                        Score: {score}/{questionsData.length}
                    </h4>

                    <Button onClick={() => setCurrentIndex(i => i + 1)} disabled={!hasNext} value="Next" />

                    {!showResults && (
                        <Button onClick={handleResults} value="Submit" />
                    )}

                    {showResults && (
                        <Button onClick={restartQuiz} value="Restart Quiz" />
                    )}
                </div>

            </div>
        </div>
    );
};

export default Display;
