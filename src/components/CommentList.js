import React, { Component, PropTypes } from 'react';
import Comment from './Comment';
import DatePicker, { DateUtils } from 'react-day-picker';
import moment from "moment";

import 'react-day-picker/lib/style.css';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        commenter: PropTypes.string,
        commentText: PropTypes.string,
        from: PropTypes.string,
        to: PropTypes.string
    };

    static defaultProps = {
        comments: []
    };

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
       // console.log('---', this.props, nextProps)
    }


    componentWillUnmount() {
        //console.log('---', 'unmounting')
    }

    state = {
        isOpen: false,
        commenter: '',
        commentText: '',
        from: null,
        to: null
    };

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show';
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;

        const {comments} = this.props;
        if (!comments.length) return <h3>No comments yet</h3>;

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return <div>
            <ul>{commentItems}</ul>
          <form onSubmit={this.submitComment}>
            <div style={{float: "left", width:30+"%"}}> User: <input type="text" value={this.state.commenter} onChange={this.inputCommenter} /> </div>
            <div> Comment: <textarea value={this.state.commentText} onChange={this.inputComment} /> </div>
            <div> <input type="submit" /></div>
          </form>
          <div>
            { !this.state.from && !this.state.to && <p>Please select the <strong>first day</strong>.</p> }
            { this.state.from && !this.state.to && <p>Please select the <strong>last day</strong>.</p> }
            { this.state.from && this.state.to &&
              <p>
                  You chose from { moment(this.state.from).format('L') } to { moment(this.state.to).format('L') }.
                { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
              </p>
            }
              <DatePicker
                numberOfMonths={ 2 }
                selectedDays={ day => DateUtils.isDayInRange(day, { from:this.state.from, to:this.state.to }) }
                onDayClick={ this.handleDayClick }
              />
          </div>
        </div>

    }

    toggleOpen = ev => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    };

    // Form related methods
    inputCommenter = ev => {
        this.setState({
          commenter: ev.target.value
        });
    };

    inputComment = ev => {
        this.setState({
          commentText: ev.target.value
        });
    };

    submitComment = ev => {
        ev.preventDefault();
        this.setState({
            commenter: '',
            commentText: ''
        });
    }
}

export default CommentList;