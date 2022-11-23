import {nanoid} from "@reduxjs/toolkit";
import {setCity} from "../../../store/actions";
import cn from 'classnames'
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

type CityLocationsProps = {
  citiesList: string[]
}

function CityLocations({citiesList}: CityLocationsProps): JSX.Element {

  const dispatch = useAppDispatch()
  const activeCity = useAppSelector(state => state.activeCity)

  const onCitySelect = (city: string) =>{
    dispatch(setCity(city))
  }
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          citiesList.map(city =>
            <li className="locations__item" key={nanoid()}>
              <a className={cn('locations__item-link',  'tabs__item', city===activeCity ? 'tabs__item--active': '')} href="#" onClick={()=>onCitySelect(city)}>
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
