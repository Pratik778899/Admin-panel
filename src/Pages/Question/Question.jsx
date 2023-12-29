import React, { useState } from 'react';
import QuestionList from './QuestionList.json';
import './Question.css';

const Question = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = QuestionList.questions.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div id="question-container">
        <h1 className='text-grade'>Question</h1>
        <div id="question">
          <h4>Question</h4>
          <h4 id='ml'>Avg Que Solved</h4>
          <h4 id='mr'>Difficulty</h4>
          <h4>Remove</h4>
        </div>
        <div id="Question-main">
          {currentItems.map((item, index) => (
            <div id='question-contain' key={index}>
              <h3>{item.question}</h3>
              <h3>{item.AverageQueSolved}</h3>
              <h3>{item.difficulty}</h3>
              <button className='button'>Remove Question</button>
            </div>
          ))}
        </div>
        <div className="pagination flex justify-center">
          {Array.from({ length: Math.ceil(QuestionList.questions.length / itemsPerPage) }, (_, i) => (
            <button className='button' key={i + 1} onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
