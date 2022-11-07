type BookmarkProps = {
  isFavorite: boolean
}
function Bookmark({isFavorite}: BookmarkProps): JSX.Element {
  const activeBtn = isFavorite ? "place-card__bookmark-button--active" : ""
  return (
    <button className={`place - card__bookmark - button button ${activeBtn}`}
            type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  )
}
export default Bookmark
