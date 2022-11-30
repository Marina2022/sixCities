import {RoomType} from "../types/types";

export const getSortedOffers = (offers: RoomType[], variant: string) => {
  //console.log(offers)
  switch (variant) {
    case 'Popular':
      return offers
    case 'Price: low to high':
      return offers.sort((a, b) => a.price - b.price)
    case 'Price: high to low':
      return offers.sort((a, b) => b.price - a.price)
    case 'Top rated first':
      return offers.sort((a, b) => b.rating - a.rating)
    default:
      return offers
  }
}

export const getAdaptedOffer = (offer: any) => ({
  price: offer.price,
  rating: offer.rating,
  desc: offer.description,
  type: offer.type,
  src: offer.preview_image,
  id: offer.id,
  isFavorite: offer.is_favorite,
  city: {
    cityLocation: offer.city.location,
    name: offer.city.name
  },
  bedrooms: offer.bedrooms,
  maxAdults: offer.max_adults,
  isPremium: offer.is_premium,
  location: {
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    zoom: offer.location.zoom
  },
  title: offer.title,
  host: {
    avatarUrl: offer.host.avatar_url,
    id: offer.host.id,
    isPro: offer.host.is_pro,
    name: offer.host.name
  },
  images: offer.images,
  goods: offer.goods,

})



export const getAdaptedOffers = (offers: any[]) => {
  return offers.map((offer: any) => getAdaptedOffer(offer))
}
