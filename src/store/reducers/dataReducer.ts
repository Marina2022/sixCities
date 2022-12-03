import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import {CommentType, RoomType, SendReviewType} from "../../types/types";
import {getAdaptedOffer, getAdaptedOffers, getSortedOffers} from "../../utils/utils";
import {GlobalState} from "../../types/storeTypes";
import {api, store} from "../../index";
import {APIRoutes, AuthStatus} from "../../consts";
import history from "../../browserHistory";
import {AxiosError} from "axios";

export const fetchOffers = createAsyncThunk('data/fetchOffers',
  async () => {
    const data = await api.get(APIRoutes.Hotels)
    return getAdaptedOffers(data.data)
  })

export const sendFavor = createAsyncThunk
('data/sendFavor', async (favorData: { offerId: string, isFavorite: boolean }, {getState}) => {
  if (store.getState().USER.authStatus !== AuthStatus.Auth) {
    history.push(APIRoutes.Login)
  } else {
    const resp = await api.post('/favorite/' + favorData.offerId + '/' + Number(!favorData.isFavorite))
    return resp.data
  }
})


export const getRoom = createAsyncThunk('data/getRoomData', async (id: string) => {
  try {
    const response = await api.get(APIRoutes.Hotels + '/' + id)
    return getAdaptedOffer(response.data)
  } catch (e) {
    if (e instanceof AxiosError) {
      if (e.code == 'ERR_BAD_REQUEST') history.push('/404')
    }
    throw new Error('error')
  }
})

export const getNearby = createAsyncThunk('data/getNearby', async (id: string) => {
  const nearbyRooms = await api.get(APIRoutes.Hotels + '/' + id + '/' + 'nearby')
  return getAdaptedOffers(nearbyRooms.data)
})

export const getComments = createAsyncThunk('data/getComments', async (id: string) => {
  const response = await api.get<CommentType[]>(APIRoutes.Comments + '/' + id)
  return response.data
})


export const sendReview = createAsyncThunk('data/sendReview', async (arg: SendReviewType) => {
  const reps = await api.post(APIRoutes.Comments + '/' + arg.id, arg.body)
  return reps.data
})


const initialState = {
  activeCity: 'Amsterdam',
  offers: [] as RoomType[],
  currentSort: 'Popular',
  isLoading: false,
  roomData: null as RoomType | null,
  nearbyData: null as RoomType[] | null,
  comments: null as CommentType[] | null,
  reviewLoading: false
}


const dataReducer = createSlice({
  name: 'DATA',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.activeCity = action.payload
    },

    setSortVariant: (state, action) => {
      state.currentSort = action.payload
    },

  },

  extraReducers: (builder) => builder
    .addCase(fetchOffers.pending, (state, action) => {
      state.isLoading = true
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload
      state.isLoading = false
    })
    .addCase(fetchOffers.rejected, (state, action) => {
      console.log('fetching hotels error ')
      state.isLoading = false
    })


    .addCase(sendFavor.fulfilled, (state, action) => {
      const vafOffer = getAdaptedOffer(action.payload)
      const index = state.offers.findIndex(offer => offer.id === vafOffer.id)
      state.offers[index] = vafOffer
      if (state.roomData) {
        if (state.roomData.id === vafOffer.id) state.roomData = vafOffer
      }
    })

    .addCase(sendFavor.rejected, () => {
      console.log('favorites error')
    })

    .addCase(getRoom.pending, (state, action) => {
      state.isLoading = true
    })

    .addCase(getRoom.fulfilled, (state, action) => {
      state.roomData = action.payload
      state.isLoading = false
    })

    .addCase(getRoom.rejected, (state, action) => {
      state.isLoading = false
    })

    .addCase(getNearby.fulfilled, (state, action) => {
      state.nearbyData = action.payload
    })

    .addCase(getComments.fulfilled, (state, action) => {
      state.comments = action.payload
    })


    .addCase(sendReview.pending, (state, action) => {
      state.reviewLoading = true
    })


    .addCase(sendReview.fulfilled, (state, action) => {
      state.comments = action.payload.data
      state.reviewLoading = false
    })

    .addCase(sendReview.rejected, (state, action) => {
      console.log('send review error')
      state.reviewLoading = false
    })


})


export const {
  setCity,
  setSortVariant,
} = dataReducer.actions

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
export const selectReviewLoading = (state: GlobalState) => selectDataState(state).reviewLoading

