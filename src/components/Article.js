import React, {Component} from 'react';
import CommentList from "./CommentList";

export default class Article extends Component {
  state = { isOpen: false, isCommentsVisible: false };
  /*
   constructor(props) {
   super(props)
   this.state = {
   isOpen: props.defaultOpen
   }
   }
   */

  render() {
    const {article} = this.props;
    let commentsSection = "No Comments yet";

    if(article.comments) {
      commentsSection = (
        <section>
          <a className="btn btn-success pull-right" onClick={this.toggleComments}>
            { this.state.isCommentsVisible ? 'Hide Comments' : 'Show Comments' }
          </a>
          {this.getComments(article)}
        </section>
      );
    }

    return (
      <div>
        <h3 onClick={this.handleClick}>{article.title}</h3>
        {this.getBody()}
        { commentsSection }
      </div>
    );
  }

  getBody() {
    if (!this.state.isOpen) return null;

    return (
      <section>
        {this.props.article.text}
      </section>
    );
  }

  getComments(article) {
    if( !this.state.isCommentsVisible || !article.comments ) return null;

    return (
      <ul className="comments-section" key={article.id}>
        <CommentList comments={article.comments} />
      </ul>
    );
  }

  toggleComments = (ev) => {
    this.setState({
      isCommentsVisible: !this.state.isCommentsVisible
    });
  };

  handleClick = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}