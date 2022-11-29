import {Navigate, useParams} from "react-router-dom";
import {RoomType} from "../../types/types";
import CommentsForm from "./comments-form/comments-form";
import CityMap from "../../components/map/cityMap";
import {ReviewsList} from "./reviews-list/reviews-list";
import OffersList from "../main-page/offers-list/offers-list";
import {useSelector} from "react-redux";
import {useAppSelector} from "../../hooks/hooks";



function RoomPage(): JSX.Element {
  const offers = useAppSelector(state=>state.offersForChosenCity)
  const {id: currentId} = useParams()
  const room = offers.find(offer => offer.id === currentId || '')
  if (!room) return <></>
  return (
    <main className="page__main page__main--property">
      <div className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img className="property__image" src="/img/room.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="/img/apartment-01.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="/img/apartment-02.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="/img/apartment-03.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="/img/studio-01.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="/img/apartment-01.jpg" alt="Photo studio"/>
            </div>
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span> {room?.type} </span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                Beautiful &amp; luxurious studio at great location
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{"width": "80%"}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">4.8</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {room?.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {room?.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {room?.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{room?.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                <li className="property__inside-item">
                  Wi-Fi
                </li>
                <li className="property__inside-item">
                  Washing machine
                </li>
                <li className="property__inside-item">
                  Towels
                </li>
                <li className="property__inside-item">
                  Heating
                </li>
                <li className="property__inside-item">
                  Coffee machine
                </li>
                <li className="property__inside-item">
                  Baby seat
                </li>
                <li className="property__inside-item">
                  Kitchen
                </li>
                <li className="property__inside-item">
                  Dishwasher
                </li>
                <li className="property__inside-item">
                  Cabel TV
                </li>
                <li className="property__inside-item">
                  Fridge
                </li>
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="/img/avatar-angelina.jpg" width="74" height="74"
                       alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                    Angelina
                  </span>
                <span className="property__user-status">
                    Pro
                  </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                  building is green and from 18th century.
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where
                  the
                  bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <ReviewsList/>
              <CommentsForm/>
            </section>
          </div>
        </div>
        <div style={{'textAlign': 'center'}}>
          <CityMap offers={offers.filter(offer => offer.id !== room.id)} offerHoveredId={'-1'}/>
        </div>
      </div>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersList offers={offers.filter(offer => offer.id !== room.id)} nearPlace={true}/>
        </section>
      </div>
    </main>
  )
}

export default RoomPage
