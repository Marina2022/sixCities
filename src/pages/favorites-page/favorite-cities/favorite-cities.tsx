import FavoriteListOfCity from "../favorite-offers-for-city/favorite-list-of-city";
import {nanoid} from "@reduxjs/toolkit";
import {RoomType} from "../../../types/types";


export type FavoriteCitiesProps = {
  offers: RoomType[]
}


function FavoriteCities({offers}:FavoriteCitiesProps): JSX.Element {
  const uniqueCities = new Set()
  offers.forEach(offer => uniqueCities.add(offer.city.name))
  const uniqueCitiesArray = [...uniqueCities]
  const favoriteOffers=offers.filter(offer=>offer.isFavorite)

  return (
    <ul className="favorites__list">
      {
        uniqueCitiesArray.map((city: any, index: number) =>
          <li className="favorites__locations-items" key={nanoid()}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <FavoriteListOfCity offers={favoriteOffers} city={city}/>
          </li>
        )
      }


    </ul>

  )
}

export default FavoriteCities
