export type RoomType = {
  price: number,
  rating: number,
  desc: string
  type: "Private room" | "Apartment" | "House" | "Hotel"
  src: string,
  readonly id: string,
  isFavorite: boolean,
  city: string,
  bedrooms: number,
  maxAdults: number,
  isPremium: boolean,
}
