import {RoomType} from "../../types/types";
import {cities} from "../../mocks/cities"
import OffersList from "./offers-list/offers-list";
import CityLocations from "./city-locations/city-locations";
import SortOffers from "./sort-offers/sort-offers";

type MainPageProps = {
  offers: RoomType[]
}
function MainPage({offers}: MainPageProps): JSX.Element {
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
            <b className="places__found">312 places to stay in Amsterdam</b>
            <SortOffers/>
            <OffersList offers={offers}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainPage

