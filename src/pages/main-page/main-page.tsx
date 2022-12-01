import {cities} from "../../mocks/cities"
import OffersList from "./offers-list/offers-list";
import CityLocations from "./city-locations/city-locations";
import SortOffers from "./sort-offers/sort-offers";
import CityMap from "../../components/map/cityMap";
import {useState} from "react";
import {useAppSelector} from "../../hooks/hooks";
import {RotatingLines} from "react-loader-spinner";
import Header from "../../components/header/header";
import EmptyMainPage from "./emtpty-main-page";


function MainPage(): JSX.Element {
  const currentOffers = useAppSelector(state => state.offersForChosenCity)

  const [activeCard, setActiveCard] = useState('-1')

  const isLoading = useAppSelector(state => state.isLoading)
  if (isLoading) return <div style={{'textAlign': 'center', 'padding': 50}}><RotatingLines strokeColor="#4481c3"/></div>


  return (
    <><Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityLocations citiesList={cities}/>
        </div>

        {
          currentOffers.length === 0 ? <EmptyMainPage/> :

          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} places to stay in {currentOffers[0].city.name}</b>
                <SortOffers/>
                <OffersList offers={currentOffers} setActiveCard={setActiveCard}/>
              </section>
              <div className="cities__right-section">
                <CityMap offers={currentOffers} offerHoveredId={activeCard}/>
              </div>
            </div>
          </div>
        }

      </main>
    </>
  )
}

export default MainPage

