import React, { useState } from "react";
import "./UserReports.css";
import Reports from "./Reports.json";

const UserReports = () => {
  const [showReplyPopup, setShowReplyPopup] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleReplyClick = report => {
    setSelectedReport(report);
    setShowReplyPopup(true);
  };

  const closePopup = () => {
    setShowReplyPopup(false);
    setSelectedReport(null);
  };

  const handelMessageSend = () => {
    alert("message send sucessfully");
    setShowReplyPopup(false);
  };

  return (
    <>
      <div className="glow-round"></div>
      <div id="userReports" className="card relative">
        <h1 className="small-text-grade">User Reports</h1>
        <div id="userReportMap">
          {Reports.reports.map((item, index) => (
            <div className="flex singleReport" key={index}>
              <h3>{index + 1}</h3>
              <h3>{item.name}</h3>
              <h3>{item.comment}</h3>
              <button className="button" onClick={() => handleReplyClick(item)}>
                Reply
              </button>
            </div>
          ))}
        </div>
        {showReplyPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>
                &times;
              </span>
              {selectedReport && (
                <div id="reply">
                  <h2>Replying to: {selectedReport.name}</h2>
                  <textarea
                    rows="4"
                    cols="50"
                    placeholder="Type your reply here..."
                  ></textarea>
                  <div className="m-2">
                    <button onClick={handelMessageSend} className="button">
                      Send Reply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="glow-round-right"></div>
    </>
  );
};

export default UserReports;
