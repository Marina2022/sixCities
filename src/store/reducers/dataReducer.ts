import {createSelector, createSlice, current} from "@reduxjs/toolkit";
import {CommentType, RoomType} from "../../types/types";
import {getSortedOffers} from "../../utils/utils";
import {GlobalState} from "../../types/storeTypes";


const initialState = {
  activeCity: 'Amsterdam',
  offers: [] as RoomType[],
  currentSort: 'Popular',
  isLoading: false,
  roomData: null as RoomType | null,
  nearbyData: null as RoomType[] | null,
  comments: null as CommentType[] | null
}


const dataReducer = createSlice({
  name: 'DATA',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.activeCity = action.payload
    },

    offersLoaded: (state, action) => {
      state.offers = action.payload
      state.offers = action.payload
    },

    setSortVariant: (state, action) => {
      state.currentSort = action.payload
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },

    updateFavorite: (state, action) => {
      const index = state.offers.findIndex(offer => offer.id === action.payload.id)
       state.offers[index] = action.payload

      if (state.roomData) {
        if (state.roomData.id === action.payload.id) state.roomData = action.payload
      }
    },
    setRoomData: (state, action) => {
      state.roomData = action.payload
    },
    setNearbyData: (state, action) => {
      state.nearbyData = action.payload
    },
    setComments: (state, action) => {
      state.comments = action.payload
    }
  }
})


export const {updateFavorite, setCity, offersLoaded, setSortVariant, setIsLoading, setRoomData, setNearbyData, setComments} = dataReducer.actions

export default dataReducer.reducer

const selectDataState = (state: GlobalState) => state.DATA


export const selectOffer = (state: GlobalState) => selectDataState(state).offers
export const selectCurrentSort = (state: GlobalState) => selectDataState(state).currentSort
export const selectActiveCity = (state: GlobalState) => selectDataState(state).activeCity

export const selectOffersForChosenCity = createSelector(selectOffer, selectCurrentSort, selectActiveCity, (offers, currentSort, activeCity) => {
  const sortedOffers = getSortedOffers([...offers], currentSort)
  return sortedOffers.filter((offer) => offer.city.name === activeCity)
})

export const selectIsLoading = (state: GlobalState) => selectDataState(state).isLoading
export const selectComments = (state: GlobalState) => selectDataState(state).comments
export const selectNearbyData = (state: GlobalState) => selectDataState(state).nearbyData
export const selectRoomData = (state: GlobalState) => selectDataState(state).roomData

