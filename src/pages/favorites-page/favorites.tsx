import FavoriteCities from "./favorite-cities/favorite-cities";
import {useAppSelector} from "../../hooks/hooks";
import {selectOffersForChosenCity} from "../../store/reducers/dataReducer";

function Favorites(): JSX.Element {
  const offers = useAppSelector(selectOffersForChosenCity)
  return (
    <div className="page__favorites-container container">
      <section className="favorites" style={{'paddingTop':40}}>
        <h1 className="favorites__title">Saved listing</h1>
          <FavoriteCities offers={offers}/>
      </section>
    </div>
  )
}

export default Favorites
