import Review from "./review/reviews";
import {useAppSelector} from "../../../hooks/hooks";

export function ReviewsList(): JSX.Element {

  const comments = useAppSelector(state=> state.comments)
  if (!comments) return <></>
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
