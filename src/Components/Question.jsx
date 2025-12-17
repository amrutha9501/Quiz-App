import React from 'react';

const Question = ({ current, onSelected, selected, showResults }) => {
    const isAttempted = selected !== null;

    return (
        <>
            <h3 className="text-xl mb-4">{current.question}</h3>
            <ul className="space-y-3">
                {current.options.map(option => {
                    let bgClass = "bg-gray-700 hover:bg-gray-600";

                    // before submit
                    if (!showResults && selected === option) {
                        bgClass = "bg-[#747bff]";
                    }

                    // after submit
                    if (showResults && isAttempted) {
                        if (option === current.answer) {
                            bgClass = "bg-green-500";
                        } else if (selected === option) {
                            bgClass = "bg-red-500";
                        }
                    }

                    return (
                        <li
                            key={option}
                            onClick={() => !showResults && onSelected(option)}
                            className={`px-4 py-2 rounded-md border border-gray-600 cursor-pointer transition ${bgClass}`}
                        >
                            {option}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Question;
