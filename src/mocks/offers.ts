import {RoomType} from "../types/types";
import {nanoid} from "@reduxjs/toolkit";

export const offers: RoomType[] = [
  {
    id: "111",
    price: 80,
    desc: "Beautiful &amp; luxurious apartment at great location",
    rating: 3,
    type: "Apartment",
    src: "/img/apartment-01.jpg",
    isFavorite: true,
    city: "Amsterdam",
    bedrooms: 3,
    maxAdults: 4,
    isPremium: false,
  },

  {
    id: "2222",
    price: 120,
    desc: "Wood and stone place",
    rating: 4,
    type: "Apartment",
    src: "/img/room.jpg",
    isFavorite: true,
    city: "Amsterdam",
    bedrooms: 1,
    maxAdults: 2,
    isPremium: false,
  },

  {
    id: "3",
    price: 132,
    desc: "Canal View Prinsengracht",
    rating: 5,
    type: "Private room",
    src: "/img/apartment-02.jpg",
    isFavorite: true,
    city: "Cologne",
    bedrooms: 2,
    maxAdults: 4,
    isPremium: false,
  },

  {
    id: "4",
    price: 180,
    desc: "Nice, cozy, warm big bed apartment",
    rating: 2,
    type: "Apartment",
    src: "/img/apartment-03.jpg",
    isFavorite: false,
    city: "Amsterdam",
    bedrooms: 3,
    maxAdults: 2,
    isPremium: true,
  },


]
