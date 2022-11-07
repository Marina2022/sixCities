type RatingProps = {
  rating: number
}
function Rating({rating}: RatingProps): JSX.Element {
  const stars = 20 * rating + "%"
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{"width": stars}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  )
}

export default Rating
