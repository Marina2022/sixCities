import {RoomType} from "../../../types/types";
import Rating from "../../../components/rating/rating";
import Bookmark from "../../../components/bookmark/bookmark";

type FavoriteListOfCityProps = {
  offers: RoomType[],
  city: string
}

function FavoriteListOfCity({offers, city}: FavoriteListOfCityProps): JSX.Element {

  const offersForCity = offers.filter(offer => offer.city.name === city)
  return (
    <>
      <div className="favorites__places">
        {
          offersForCity.map(offer => (
              <article className="favorites__card place-card" key={offer.id}>
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src={offer.src} width="150" height="110"
                         alt="Place image"/>
                  </a>
                </div>
                <div className="favorites__card-info place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;{offer.price}</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                     <Bookmark isFavorite={offer.isFavorite}/>
                  </div>
                    <Rating rating={offer.rating} classFor={'place-card'}  />
                  <h2 className="place-card__name">
                    <a href="#">{offer.desc}</a>
                  </h2>
                  <p className="place-card__type">{offer.type}</p>
                </div>
              </article>
            )
          )
        }


      </div>
    </>
  )
}


export default FavoriteListOfCity
