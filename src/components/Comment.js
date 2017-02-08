import React, { PropTypes } from 'react'

const Comment = (props) => {
  const {text, user} = props.comment;
  return (
    <div>
      {text}
      {user && <b> by {user}</b>}
    </div>
  )
};

Comment.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Comment