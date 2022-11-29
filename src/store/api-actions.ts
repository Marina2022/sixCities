import {createAsyncThunk, createReducer} from "@reduxjs/toolkit";
import {AppDispatch, GlobalState} from "../types/storeTypes";
import {AxiosInstance} from "axios";
import {RoomType} from "../types/types"

import {offersLoaded, setIsLoading} from "./actions";
import {api} from "../index";
import {getAdaptedOffers} from "../utils/utils";

export const fetchOffers = createAsyncThunk<void, undefined,
  {
    dispatch: AppDispatch,
    state: GlobalState,
    extra: AxiosInstance
  }
  >('main/fetchOffers', async(_arg, {dispatch, extra})=>{
    dispatch(setIsLoading(true))
  try {
    const data = await api.get<RoomType[]>('/hotels')
    const adaptedOffers = getAdaptedOffers(data.data)
    dispatch(offersLoaded(adaptedOffers))
  } catch(e) {
      // сетаем ошибку
  }
  finally {
    dispatch(setIsLoading(false))
  }

})
