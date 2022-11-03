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
    console.log(id)
  }
  return (
    <>
      {
        offers.map((offer: RoomType, index: number) =>
          <CityCard
            index={index}
            offer={offer}
            key={offer.id}
            onMouseEnter={()=>handleMouseEnter(offer.id)}
          />)
      }
    </>
  )
}

export default OffersList
