import {CommentType} from "../../../../types/types";
import Rating from "../../../../components/rating/rating";

type ReviewProps = {
  comment: CommentType
}

const Review = ({comment}: ReviewProps): JSX.Element => {
  const dateOfComment = new Date(comment.date)
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatar_url} width="54" height="54"
               alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={comment.rating} classFor={'place-card'}/>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={`${dateOfComment.getFullYear()}-${dateOfComment.getMonth()}-${dateOfComment.getDate()}`}>
          {dateOfComment.toDateString()}
        </time>
      </div>
    </li>
  )
}

export default Review
