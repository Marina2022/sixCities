import {useAppDispatch} from "../../hooks/hooks";
import {sendFavor} from "../../store/reducers/dataReducer";

type BookmarkProps = {
  isFavorite: boolean,
  offerId: string
}
function Bookmark({isFavorite, offerId}: BookmarkProps): JSX.Element {
  const activeBtn = isFavorite ? "place-card__bookmark-button--active" : ""

  const dispatch = useAppDispatch()

  const sendToFavorites = (offerId: string, isFavorite: boolean) => {
    dispatch(sendFavor({offerId, isFavorite}))
  }

  return (
    <button className={`place - card__bookmark - button button ${activeBtn}`}
            type="button"
            onClick={()=>sendToFavorites(offerId, isFavorite)}

    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  )
}
export default Bookmark
