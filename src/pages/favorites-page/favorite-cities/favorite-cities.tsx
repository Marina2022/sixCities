import FavoriteOffersForCity from "../favorite-offers-for-city/favorite-list-of-city";
import FavoriteListOfCity from "../favorite-offers-for-city/favorite-list-of-city";
import {FavoriteProps} from "../favorites";
import {nanoid} from "@reduxjs/toolkit";
import {ReactNode} from "react";

function FavoriteCities({offers}:FavoriteProps): JSX.Element {
  const uniqueCities = new Set()
  offers.forEach(offer => uniqueCities.add(offer.city))
  const uniqueCitiesArray = [...uniqueCities] as string[]
  const favoriteOffers=offers.filter(offer=>offer.isFavorite)

  return (
    <ul className="favorites__list">
      {
        uniqueCitiesArray.map((city: string, index: number) =>
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
