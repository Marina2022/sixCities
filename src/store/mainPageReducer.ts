import {createReducer} from "@reduxjs/toolkit";
import {setCity, setOffers} from "./actions";
import {RoomType} from "../types/types";

const initialState = {
  activeCity: 'Amsterdam',
  offers: [] as RoomType[],
  currentOffers: [] as RoomType[],
}

const mainPageReducer = createReducer(initialState, (builder)=>
builder
  .addCase(setCity, (state, action)=> {
    state.activeCity = action.payload
    state.currentOffers = state.offers.filter((offer)=> offer.city.name === state.activeCity)
  })

  .addCase(setOffers, (state, action)=>{
    state.offers = action.payload
    state.currentOffers = state.offers.filter((offer)=> offer.city.name === state.activeCity)
  })
)


export default mainPageReducer
