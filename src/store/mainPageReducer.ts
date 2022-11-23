import {createReducer, current} from "@reduxjs/toolkit";
import {setCity, setOffers, setSortVariant} from "./actions";
import {RoomType} from "../types/types";
import {getSortedOffers} from "../utils/utils";

const initialState = {
  activeCity: 'Amsterdam',
  notSortedOffers: [] as RoomType[],
  offers: [] as RoomType[],
  currentOffers: [] as RoomType[],
  currentSort: 'Popular'
}

const mainPageReducer = createReducer(initialState, (builder)=>
builder
  .addCase(setCity, (state, action)=> {
    state.activeCity = action.payload
    state.currentOffers = state.offers.filter((offer)=> offer.city.name === state.activeCity)
  })

  .addCase(setOffers, (state, action)=>{
    state.offers = action.payload
    state.notSortedOffers = action.payload
    state.currentOffers = state.offers.filter((offer)=> offer.city.name === state.activeCity)
  })

  .addCase(setSortVariant, (state, action)=>{
    state.currentSort = action.payload
    state.offers = getSortedOffers([...current(state.notSortedOffers)], action.payload)
    state.currentOffers = state.offers.filter((offer)=> offer.city.name === state.activeCity)
  })
)


export default mainPageReducer
