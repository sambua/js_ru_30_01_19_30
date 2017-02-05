import React from "react";
import Comment from "./Comment";

const CommentList = ({comments}) => {
  const output = comments.map( (comment) => <li key={comment.id}>
    <Comment comment={comment} />
  </li>);
  return (
    <div>
      {output}
    </div>
  );
};

export default CommentList;