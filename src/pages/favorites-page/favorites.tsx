import {RoomType} from "../../types/types";
import FavoriteCities from "./favorite-cities/favorite-cities";
import {useAppSelector} from "../../hooks/hooks";

function Favorites(): JSX.Element {
  const offers = useAppSelector(state=>state.offersForChosenCity)
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
