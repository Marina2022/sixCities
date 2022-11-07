import {RoomType} from "../../../../types/types";
import {MouseEventHandler} from "react";
import Rating from "../../../../components/rating/rating";
import Bookmark from "../../../../components/bookmark/bookmark";
import {Link} from "react-router-dom";

type CityCardProps = {
  offer: RoomType,
  index: number,
  onMouseEnter: MouseEventHandler
}

function CityCard({offer, index, onMouseEnter}: CityCardProps): JSX.Element {
  return (
    <article className="cities__place-card place-card" onMouseEnter={onMouseEnter}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={"/offer/" + offer.id}>
          <img className="place-card__image" src={offer.src} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark isFavorite={offer.isFavorite}/>
        </div>
        <Rating rating={offer.rating}/>
        <h2 className="place-card__name">
          <a href="src/pages/main-page/offers-list/city-card/city-card#">{offer.desc}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  )
}

export default CityCard
