import {createReducer, current} from "@reduxjs/toolkit";
import {offersLoaded, setCity, setIsLoading, setSortVariant} from "./actions";
import {RoomType} from "../types/types";
import {getSortedOffers} from "../utils/utils";

const initialState = {
  activeCity: 'Cologne',
  notSortedOffers: [] as RoomType[],
  offers: [] as RoomType[],
  offersForChosenCity: [] as RoomType[],
  currentSort: 'Popular',
  isAuth: false,
  isLoading: false
}

const rootReducer = createReducer(initialState, (builder)=>
builder
  .addCase(setCity, (state, action)=> {
    state.activeCity = action.payload
    state.offersForChosenCity = state.offers.filter((offer)=> offer.city.name === state.activeCity)
  })

  .addCase(offersLoaded, (state, action)=>{
    state.offers = action.payload
    state.notSortedOffers = action.payload
    state.offersForChosenCity = state.offers.filter((offer)=> offer.city.name === state.activeCity)
  })

  .addCase(setSortVariant, (state, action)=>{
    state.currentSort = action.payload
    state.offers = getSortedOffers([...current(state.notSortedOffers)], action.payload)
    state.offersForChosenCity = state.offers.filter((offer)=> offer.city.name === state.activeCity)
  })

  .addCase(setIsLoading, (state, action)=>{
    state.isLoading = action.payload
  })

)


export default rootReducer
