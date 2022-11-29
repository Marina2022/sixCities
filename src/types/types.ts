export type RoomType = {
  price: number,
  rating: number,
  desc: string
  type: "private room" | "apartment" | "house" | "hotel"
  src: string,
  readonly id: string,
  isFavorite: boolean,
  city: {
    cityLocation: {
      latitude: number,
      longitude: number,
    },
    name: "Amsterdam"
  },
  bedrooms: number,
  maxAdults: number,
  isPremium: boolean,
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  }
}

export type CommentType = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    avatar_url: string,
    id: number,
    is_pro: boolean,
    name: string
  }
}


