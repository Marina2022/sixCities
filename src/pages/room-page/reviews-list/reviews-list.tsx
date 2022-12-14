import Review from "./review/reviews";
import {useAppSelector} from "../../../hooks/hooks";
import {selectComments} from "../../../store/reducers/dataReducer";

export function ReviewsList(): JSX.Element {

  const comments = useAppSelector(selectComments)
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
