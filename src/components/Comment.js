import React from "react";

const Comment = ({comment}) => {
  return (
    <div key={comment.id} >
      <em>{ comment.text }</em>
      <h6 className="pull-right">{ comment.user }</h6>
    </div>
  );
};

export default Comment;
