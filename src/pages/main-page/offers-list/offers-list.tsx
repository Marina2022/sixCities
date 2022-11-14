import {RoomType} from "../../../types/types";
import CityCard from "./city-card/city-card";

type OffersListProps = {
  offers: RoomType[],
  setActiveCard: (id: string) => void
}

function OffersList({offers, setActiveCard}: OffersListProps): JSX.Element {

  const handleMouseEnter = (id: string) => {
    setActiveCard(id)
  }
  const handleMouseLeave = () => {
    setActiveCard('-1')
  }


  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer: RoomType, index: number) =>
          <CityCard
            index={index}
            offer={offer}
            key={offer.id}
            onMouseEnter={() => handleMouseEnter(offer.id)}
            onMouseLeave={() => handleMouseLeave()}
          />
        )
      }
    </div>
  );
}

export default OffersList
