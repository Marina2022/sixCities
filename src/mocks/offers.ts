import {RoomType} from "../types/types";

export const offers: RoomType[] = [
  {
    id: "111",
    price: 132,
    desc: "Beautiful &amp; luxurious apartment at great location",
    rating: 3,
    type: "Apartment",
    src: "/img/apartment-01.jpg",
    isFavorite: true,
    city: {
      cityLocation: {
        latitude: 52.370216,
        longitude: 4.895168,
      },
      name: "Amsterdam",
    },
    bedrooms: 3,
    maxAdults: 4,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
  },

  {
    id: "2222",
    price: 120,
    desc: "Wood and stone place",
    rating: 4,
    type: "Apartment",
    src: "/img/room.jpg",
    isFavorite: true,
    city: {
      cityLocation: {
        latitude: 52.370216,
        longitude: 4.895168,
      },
      name: "Amsterdam",
    },
    bedrooms: 1,
    maxAdults: 2,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
  },

  {
    id: "3",
    price: 80,
    desc: "Canal View Prinsengracht",
    rating: 5,
    type: "Private room",
    src: "/img/apartment-02.jpg",
    isFavorite: true,
    city: {
      cityLocation: {
        latitude: 52.370216,
        longitude: 4.895168,
      },
      name: "Amsterdam",
    },
    bedrooms: 2,
    maxAdults: 4,
    isPremium: false,

    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
  },

  {
    id: "4",
    price: 180,
    desc: "Nice, cozy, warm big bed apartment",
    rating: 2,
    type: "Apartment",
    src: "/img/apartment-03.jpg",
    isFavorite: false,
    city: {
      cityLocation: {
        latitude: 52.370216,
        longitude: 4.895168,
      },
      name: "Amsterdam",
    },
    bedrooms: 3,
    maxAdults: 2,
    isPremium: true,

    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
  },

]
