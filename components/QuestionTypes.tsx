import React from "react";
import PropTypes from "prop-types";

interface QuestionTypesProps {
  selectedQuestionType: string;
  handleQuestionTypeSelect: (type: string) => void;
}

export default function QuestionTypes({
  selectedQuestionType,
  handleQuestionTypeSelect,
}: QuestionTypesProps) {
  const questionTypes = [
    "Opening",
    "Motivation",
    "Situational",
    "Behavioral",
    "Skills-Based",
    "About You",
    "Interviewer Q's",
    "Technical Q's",
    "Analytical Q's",
    "Closing",
  ];

  console.log(selectedQuestionType);

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto relative">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold my-8">
          Choose Interview Question Type
        </h1>
        <div className="grid grid-cols-2 mt-3">
          {questionTypes.map((type, idx) => (
            <button
              key={idx}
              onClick={() => handleQuestionTypeSelect(type)}
              className={`bg-${
                selectedQuestionType === type
                  ? "gray-700 text-white"
                  : "gray-200 text-gray-700"
              } bg-white rounded-full px-4 py-2 m-4 text-gray-600 font-bold text-base focus:outline-none transition-colors duration-300`}
            >
              {type}
            </button>
          ))}
        </div>
        <img
          src="/circles_1.png"
          alt=""
          className="hidden sm:absolute sm:bottom-16 sm:left-4 sm:w-40 sm:block"
        />
      </div>
    </>
  );
}

QuestionTypes.propTypes = {
  selectedQuestionType: PropTypes.string.isRequired,
  handleQuestionTypeSelect: PropTypes.func.isRequired,
};
