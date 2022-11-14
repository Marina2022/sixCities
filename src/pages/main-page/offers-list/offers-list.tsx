import {RoomType} from "../../../types/types";
import CityCard from "./city-card/city-card";

type OffersListProps = {
  offers: RoomType[],
  setActiveCard?: (id: string) => void,
  nearPlace?: boolean
}

function OffersList({offers, setActiveCard = () => {}, nearPlace = false}: OffersListProps): JSX.Element {
  const handleMouseEnter = (id: string) => {
    setActiveCard(id)
  }
  const handleMouseLeave = () => {
    setActiveCard('-1')
  }
  return (
    <div className={nearPlace ? "near-places__list places__list" : "cities__places-list places__list tabs__content"}>
      {
        offers.map((offer: RoomType, index: number) =>
          <CityCard
            index={index}
            offer={offer}
            key={offer.id}
            onMouseEnter={() => handleMouseEnter(offer.id)}
            onMouseLeave={() => handleMouseLeave()}
            nearPlace={nearPlace}
          />
        )
      }
    </div>
  );
}

export default OffersList
