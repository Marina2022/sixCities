import {createReducer, current} from "@reduxjs/toolkit";
import {
  offersLoaded,
  setAuthStatus,
  setCity, setComments,
  setIsLoading,
  setNearbyData,
  setRoomData,
  setSortVariant,
  setUserData
} from "./actions";
import {CommentType, RoomType, UserData} from "../types/types";
import {getSortedOffers} from "../utils/utils";
import {AuthStatus} from "../consts";

const initialState = {
  activeCity: 'Amsterdam',
  notSortedOffers: [] as RoomType[],
  offers: [] as RoomType[],
  offersForChosenCity: [] as RoomType[],
  currentSort: 'Popular',
  authStatus: AuthStatus.Unknown,
  isLoading: false,
  userData: {} as UserData,
  roomData: null as RoomType | null,
  nearbyData: null as RoomType[] | null,
  comments: null as CommentType[] | null
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

  .addCase(setAuthStatus, (state, action)=>{
    state.authStatus = action.payload
  })

  .addCase(setUserData, (state, action)=>{
    state.userData = action.payload
  })

  .addCase(setRoomData, (state, action)=>{
    state.roomData = action.payload
  })

  .addCase(setNearbyData, (state, action)=>{
    state.nearbyData = action.payload
  })

  .addCase(setComments, (state, action)=>{
    state.comments = action.payload
  })

)


export default rootReducer
