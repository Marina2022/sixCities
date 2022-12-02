import {useParams} from "react-router-dom";
import CommentsForm from "./comments-form/comments-form";
import CityMap from "../../components/map/cityMap";
import {ReviewsList} from "./reviews-list/reviews-list";
import OffersList from "../main-page/offers-list/offers-list";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useEffect} from "react";
import Rating from "../../components/rating/rating";
import {nanoid} from "@reduxjs/toolkit";
import {RotatingLines} from "react-loader-spinner";
import Header from "../../components/header/header";
import cn from "classnames";

import {getRoom, selectIsLoading, selectNearbyData, selectRoomData, sendFavor} from "../../store/reducers/dataReducer";


function RoomPage(): JSX.Element {
  const {id: currentId} = useParams()
  const room = useAppSelector(selectRoomData)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (currentId) {
      dispatch(getRoom(currentId))
    }
  }, [])

  const sendToFavorites = (offerId: string, isFavorite: boolean) => {
    dispatch(sendFavor({offerId, isFavorite}))
  }

  const nearbyOffers = useAppSelector(selectNearbyData)
  const isLoading = useAppSelector(selectIsLoading)
  if (isLoading) return <div style={{'textAlign': 'center', 'padding': 50}}><RotatingLines strokeColor="#4481c3"/></div>

  if (!room) return <>
    <div style={{'textAlign': 'center', 'padding': 50}}><RotatingLines strokeColor="#4481c3"/></div>
  </>

  return (
    <>
      <Header/>
      <main className="page__main page__main--property">
        <div className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery" style={{'width': 801, 'overflow': 'auto'}}>
              {
                room.images.map((imageUrl: string) => <div key={nanoid()} className="property__image-wrapper">
                  <img className="property__image" src={imageUrl} alt="Photo studio"/>
                </div>)
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span> {room?.type} </span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {room.title}
                </h1>
                <button onClick={()=>sendToFavorites(room.id, room.isFavorite)}  className={cn("property__bookmark-button", "button",
                  room.isFavorite ? "property__bookmark-button--active" : '')} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <Rating rating={room.rating} classFor={'property'}/>
                <span className="property__rating-value rating__value">{room.rating}</span>
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
                  {
                    room.goods.map((goodsItem: string) => <li key={nanoid()} className="property__inside-item">
                      {goodsItem}
                    </li>)
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={room.host.avatarUrl} width="74" height="74"
                         alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {room.host.name}
                  </span>
                  <span className="property__user-status">
                  {room.host.isPro ? 'Pro' : ''}

                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {room.desc}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList/>
                <CommentsForm roomId={currentId}/>
              </section>
            </div>
          </div>
          <div style={{'textAlign': 'center'}}>
            {nearbyOffers ? <CityMap offers={nearbyOffers} offerHoveredId={'-1'}/> : ''}
          </div>
        </div>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {nearbyOffers ? <OffersList offers={nearbyOffers}/> : ''}
          </section>
        </div>
      </main>
    </>
  )
}

export default RoomPage
