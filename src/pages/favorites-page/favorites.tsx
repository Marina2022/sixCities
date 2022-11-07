import FavoriteListOfCity from "./favorite-offers-for-city/favorite-list-of-city";
import {RoomType} from "../../types/types";
import FavoriteCities from "./favorite-cities/favorite-cities";

export type FavoriteProps = {
  offers: RoomType[]
}

function Favorites({offers}: FavoriteProps): JSX.Element {
  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
          <FavoriteCities offers={offers}/>
      </section>
    </div>
  )
}

export default Favorites
