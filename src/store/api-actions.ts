import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, GlobalState} from "../types/storeTypes";
import {AxiosError, AxiosInstance} from "axios";
import {CommentType, RoomType} from "../types/types"

import {
  offersLoaded,
  setAuthStatus,
  setComments,
  setIsLoading,
  setNearbyData,
  setRoomData,
  setUserData, updateFavorite
} from "./actions";
import {api} from "../index";
import {getAdaptedOffer, getAdaptedOffers} from "../utils/utils";
import {APIRoutes, AuthStatus} from "../consts";
import {dropToken, setToken} from "../services/token";
import history from '../browserHistory'
import App from "../components/app/app";

export const fetchOffers = createAsyncThunk<void, undefined,
  {
    dispatch: AppDispatch,
    state: GlobalState,
    extra: AxiosInstance
  }>('main/fetchOffers', async (_arg, {dispatch, extra}) => {
  dispatch(setIsLoading(true))
  try {
    const data = await api.get<RoomType[]>(APIRoutes.Hotels)
    const adaptedOffers = getAdaptedOffers(data.data)
    dispatch(offersLoaded(adaptedOffers))
  } catch (e) {
    // сетаем ошибку
  } finally {
    dispatch(setIsLoading(false))
  }
})

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  extra: AxiosInstance,
  state: GlobalState
}>
('main/checkAuth', async (_arg, {dispatch, extra: api}) => {
  try {
    const response = await api.get(APIRoutes.Login)
    dispatch(setAuthStatus(AuthStatus.Auth))
    dispatch(setUserData({
      avatarUrl: response.data.avatar_url,
      email: response.data.email,
      id: response.data.id,
      isPro: response.data.is_pro,
      name: response.data.name
    }))
    setToken(response.data.token)
  } catch {
    dispatch(setAuthStatus(AuthStatus.NoAuth))
    dispatch(setUserData({}))
  }
})

type FormData = {
  email: string,
  password: string
}


export const sendLogin = createAsyncThunk<void, FormData, {
  dispatch: AppDispatch,
  state: GlobalState,
  extra: AxiosInstance
}>('main/sendLogin', async (formData: FormData, {dispatch, extra: api}) => {
  try {
    const response = await api.post(APIRoutes.Login, formData)
    await dispatch(setUserData({
      avatarUrl: response.data.avatar_url,
      email: response.data.email,
      id: response.data.id,
      isPro: response.data.is_pro,
      name: response.data.name
    }))
    await setToken(response.data.token)
    await dispatch(checkAuth())
    history.push('/')
  } catch (e) {
    // сетаем еще одну ошибку
  }
})

export const signOut = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: GlobalState,
  extra: AxiosInstance
}>('main/signOut', async (_arg, {dispatch, extra: api}) => {
  try {
    const response = await api.delete(APIRoutes.Logout)
    dropToken()
    dispatch(checkAuth())
  } catch {
    // сетаем ошибку - не смогли разлогиниться даже
  }

})


export const getRoom = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: GlobalState,
  extra: AxiosInstance
}>('main/getRoomData', async (id, {dispatch, extra}) => {
  dispatch(setIsLoading(true))
  try {
    const response = await api.get(APIRoutes.Hotels + '/' + id)
    const adaptedData = getAdaptedOffer(response.data)
    dispatch(setRoomData(adaptedData))
    const nearbyRooms = await api.get(APIRoutes.Hotels + '/' + id + '/' + 'nearby')
    const adaptedNearby = getAdaptedOffers(nearbyRooms.data)
    dispatch(setNearbyData(adaptedNearby))
    const comments = await api.get<CommentType[]>(APIRoutes.Comments + '/' + id)
    dispatch(setComments(comments.data))
  } catch (e) {
    if (e instanceof AxiosError) {
      if (e.code == 'ERR_BAD_REQUEST') history.push('/404')
    }
  } finally {
    dispatch(setIsLoading(false))
  }

})

type SendReviewType ={
  id?: string,
  body:
    {
      comment: string,
      rating: number
    }
}
export const sendReview = createAsyncThunk<void, SendReviewType, {
  dispatch: AppDispatch,
  state: GlobalState,
  extra: AxiosInstance
}>('main/sendReview', async(arg, {dispatch, extra: api}) => {
  const response = await api.post(APIRoutes.Comments + '/' + arg.id, arg.body)
  dispatch(setComments(response.data))
})

export const sendFavor = createAsyncThunk<void, {
  offerId: string,
  isFavorite: boolean
}, {
  dispatch: AppDispatch,
  state: GlobalState,
  extra: AxiosInstance
}>('main/sendFavor', async(favorData, {dispatch, extra: api, getState})=>{
  if(getState().authStatus !== AuthStatus.Auth) {
    history.push(APIRoutes.Login)
  } else {
    const response = await api.post('/favorite/' + favorData.offerId + '/' + Number(!favorData.isFavorite))
    dispatch(updateFavorite(getAdaptedOffer(response.data)))
  }
})
