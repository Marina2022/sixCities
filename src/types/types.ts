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
  },
  title: string,
  host: {
    avatarUrl: string,
    id: string,
    isPro: boolean,
    name: string
  },
  images: string[],
  goods: string[],
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

export type UserData = {
  avatarUrl?: string,
  email?: string,
  id?: number,
  isPro?: boolean,
  name?: string

}


export type FormData = {
  email: string,
  password: string
}

export type SendReviewType ={
  id?: string,
  body:
    {
      comment: string,
      rating: number
    }
}

