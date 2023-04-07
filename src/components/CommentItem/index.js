// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {likeStatus, deleteComment, commentDetails} = props
  const {id, name, comment, date, isLiked} = commentDetails

  const likeUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const liked = isLiked ? 'Liked' : 'notLiked'

  const cLike = () => {
    likeStatus(id)
  }
  const cDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="li">
      <div className="card">
        <div className="p">
          <p>{name[0]}</p>
        </div>

        <div>
          <p>{name}</p>
          <p>{comment}</p>
        </div>
        <p>{formatDistanceToNow(new Date())}</p>
      </div>
      <div className="l">
        <div>
          <img src={likeUrl} alt="like" className={liked} />
          <button type="button" onClick={cLike} className={liked}>
            Like
          </button>
        </div>
        <button
          type="button"
          onClick={cDelete}
          className="btn1"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
