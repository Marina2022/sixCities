import {comments} from "../../../mocks/comments";
import Review from "./review/reviews";

export function ReviewsList(): JSX.Element {
  return <>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
    <ul className="reviews__list">
      {
        comments.map(comment => {
          return <Review comment={comment} key={comment.id}/>
        })
      }
    </ul>
  </>
}


export default ReviewsList
