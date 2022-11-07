import {RoomType} from "../../../types/types";
import CityCard from "./city-card/city-card";
import {useState} from "react";

type OffersListProps = {
  offers: RoomType[]
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(offers[0].id)
  const handleMouseEnter = (id: string)=>{
    setActiveCard(id)
  }
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer: RoomType, index: number) =>
          <CityCard
            index={index}
            offer={offer}
            key={offer.id}
            onMouseEnter={()=>handleMouseEnter(offer.id)}
          />
        )
      }
    </div>
  )
}

export default OffersList
