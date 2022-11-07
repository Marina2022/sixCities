import {nanoid} from "@reduxjs/toolkit";

type CityLocationsProps = {
  citiesList: string[]
}

function CityLocations({citiesList}: CityLocationsProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          citiesList.map(city =>
            <li className="locations__item" key={nanoid()}>
              <a className="locations__item-link tabs__item" href="#">
                <span>{city}</span>
              </a>
            </li>
          )
        }
      </ul>
    </section>
  )
}

export default CityLocations
