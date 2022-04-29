import React from "react";
import PropTypes from "prop-types";
import "./CommentHistory.css";
import { DeleteFilled  } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { closeComment } from "../../features/post/postsAction";

export const CommentHistory = ({ msg }) => {
  const { isAuth } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  
  

  if (!msg) return null;
  //console.log(msg);
  return msg.map((row, i) => (
    <div key={i} className="comment-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{row.sender}</div>
        <div className="date">{row.comtAt}</div>
      </div>
      <div className="comment">{row.comment}</div>
      {
        isAuth === true ? 
            user.role === '0' ? 
              <span onClick={() => 
                dispatch(closeComment(row.com_id))
                //e.target.closest(".comment-history").remove()]
              }><DeleteFilled /></span>
            : 
            ''
            :
            ''
      }
    </div>
  ));
};

CommentHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
