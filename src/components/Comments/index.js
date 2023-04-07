import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: '', count: 0}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      date: new Date(),
      isLiked: false,
      name,
      comment,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  likeStatus = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList, count} = this.state
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {commentsList, name, comment, count} = this.state

    return (
      <div className="bg-container">
        <div className="c1">
          <div>
            <h1 className="h1">Comments</h1>
            <p className="p1">Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                type="text"
                value={name}
                onChange={this.onChangeName}
                className="input"
                placeholder="Your Name"
              />
              <br />
              <textarea
                type="text"
                rows="12"
                cols="40"
                className="input"
                value={comment}
                onChange={this.onChangeComment}
                placeholder="Your Comment"
              />
              <br />
              <button type="submit" className="btn">
                Add Comment
              </button>
              <hr />
              <div className="count">
                <div className="num">
                  <p>{count}</p>
                </div>

                <p>Comments</p>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />

        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              likeStatus={this.likeStatus}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
