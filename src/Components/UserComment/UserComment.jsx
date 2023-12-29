import React, { useState } from "react";
import CommentData from "../../Comment.json";
import "./UserComment.css";

const UserComment = () => {
  const [comments, setComments] = useState(CommentData.comments);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(10);

  const removeComment = id => {
    const updatedComments = comments.filter(
      comment => comment.person_id !== id
    );
    setComments(updatedComments);
  };

  // Pagination logic
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div id="userComment" >
        <h2 className="text-grade">User Comments</h2>
      {currentComments.map(comment => (
        <div id="personContainer" key={comment.person_id}>
          <img src={comment.image} alt={comment.name} />
          <div>
            <h3>{comment.name}</h3>
            <span>{comment.comment_text}</span>
          </div>
          <div>
            <button className="button" onClick={() => removeComment(comment.person_id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div>
        {Array.from({
          length: Math.ceil(comments.length / commentsPerPage),
        }).map((_, index) => (
          <button className="button" key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserComment;
