import {RoomType} from "../../types/types";
import {cities} from "../../mocks/cities"
import OffersList from "./offers-list/offers-list";
import CityLocations from "./city-locations/city-locations";
import SortOffers from "./sort-offers/sort-offers";
import CityMap from "../../components/map/cityMap";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setOffers} from "../../store/actions";
import {offers} from "../../mocks/offers";


function MainPage(): JSX.Element {
  const currentOffers = useAppSelector(state=>state.currentOffers)
  const [activeCard, setActiveCard] = useState('-1')

  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(setOffers(offers));  //
  },[])

  if (!currentOffers) return <div>spinner</div>

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityLocations citiesList={cities}/>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentOffers.length} places to stay in Amsterdam</b>
            <SortOffers/>
            <OffersList offers={currentOffers} setActiveCard={setActiveCard}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <CityMap offers={currentOffers} offerHoveredId={activeCard}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainPage

