import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserData, FormData} from "../../types/types";
import {APIRoutes, AuthStatus} from "../../consts";
import {GlobalState} from "../../types/storeTypes";
import {dropToken, setToken} from "../../services/token";
import {api} from "../../index";
import history from "../../browserHistory";

export const checkAuth = createAsyncThunk
('user/checkAuth', async () => {
  const data = await api.get(APIRoutes.Login)
  return data.data
})

export const signOut = createAsyncThunk('user/signOut', async () => {
  await api.delete(APIRoutes.Logout)
  history.push('/login')
  return
})

export const sendLogin = createAsyncThunk('user/sendLogin', async (formData: FormData) => {
  const response = await api.post(APIRoutes.Login, formData)
  await setToken(response.data.token)
  await checkAuth()
  return {
    avatarUrl: response.data.avatar_url,
    email: response.data.email,
    id: response.data.id,
    isPro: response.data.is_pro,
    name: response.data.name
  }

})

const initialState = {
  userData: {} as UserData,
  authStatus: AuthStatus.Unknown,
}


const userReducer = createSlice({
    name: 'USER',
    initialState: initialState,
    reducers: {
      setUserData: (state, action) => {
        state.userData = action.payload
      },
      setAuthStatus: (state, action) => {
        state.authStatus = action.payload
      }
    },
    extraReducers: (builder) => builder

      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth
        state.userData = {
          avatarUrl: action.payload.avatar_url,
          email: action.payload.email,
          id: action.payload.id,
          isPro: action.payload.is_pro,
          name: action.payload.name
        }
        setToken(action.payload.token)
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth
        state.userData = {}
      })

      .addCase(signOut.fulfilled, (state) => {
        dropToken()
        checkAuth()
      })

      .addCase(signOut.rejected, (state) => {
        console.log('Logout error')
      })

      .addCase(sendLogin.fulfilled, (state, action) => {
        state.userData = action.payload
        history.push('/')
      })

      .addCase(sendLogin.rejected, (state, action) => {
        console.log('send login error')
      })
  }
)

const selectUserDataState = (state: GlobalState) => state.USER;

export const selectAuthStatus = (state: GlobalState) => selectUserDataState(state).authStatus
export const selectUserData = (state: GlobalState) => selectUserDataState(state).userData

export default userReducer.reducer


