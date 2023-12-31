import React, { useState } from "react";
import QuestionList from "./QuestionList.json";
import "./Question.css";

const Question = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [questions, setQuestions] = useState(QuestionList.questions);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteQuestion = indexToRemove => {
    const updatedQuestions = questions.filter(
      (question, index) => index !== indexToRemove
    );
    setQuestions(updatedQuestions);
  };

  return (
    <>
      <div className="glow-round"></div>
      <div id="question-container" className="card relative">
        <h1 className="small-text-grade">Question</h1>
        <div id="question">
          <h4>Question</h4>
          <h4 id="ml">Avg Que Solved</h4>
          <h4 id="mr">Difficulty</h4>
          <h4>Remove</h4>
        </div>
        <div id="Question-main">
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <div id="question-contain" key={indexOfFirstItem + index}>
                <h3>{item.question}</h3>
                <h3>{item.AverageQueSolved}</h3>
                <h3>{item.difficulty}</h3>
                <button
                  className="button"
                  onClick={() => handleDeleteQuestion(indexOfFirstItem + index)}
                >
                  Remove Question
                </button>
              </div>
            ))
          ) : (
            <div id="no-question">
              <p>No questions available.</p>
            </div>
          )}
        </div>
        <div className="pagination flex justify-center">
          {Array.from(
            { length: Math.ceil(questions.length / itemsPerPage) },
            (_, i) => (
              <button
                className="button"
                key={i + 1}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
      <div className="glow-round-right"></div>
    </>
  );
};

export default Question;
