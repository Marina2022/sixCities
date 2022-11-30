type RatingProps = {
  rating: number,
  classFor: string
}
function Rating({rating, classFor}: RatingProps): JSX.Element {
  const stars = 20 * rating + "%"
  return (
    <div className={`${classFor}__rating rating`}>
      <div className={`${classFor}__stars rating__stars`}>
        <span style={{"width": stars}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  )
}

export default Rating
