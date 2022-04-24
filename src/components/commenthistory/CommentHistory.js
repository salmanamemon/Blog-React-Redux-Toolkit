import React from "react";
import PropTypes from "prop-types";
import "./CommentHistory.css";

export const CommentHistory = ({ msg }) => {
  if (!msg) return null;
  console.log(msg);
  return msg.map((row, i) => (
    <div key={i} className="comment-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{row.sender}</div>
        <div className="date">{row.comtAt}</div>
      </div>
      <div className="comment">{row.comment}</div>
    </div>
  ));
};

CommentHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
