import {createSlice} from "@reduxjs/toolkit";
import {UserData} from "../../types/types";
import {AuthStatus} from "../../consts";
import {GlobalState} from "../../types/storeTypes";

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
    }
  }
)

export const {setUserData, setAuthStatus} = userReducer.actions


const selectUserDataState = (state: GlobalState) => state.USER;

export const selectAuthStatus =(state: GlobalState) => selectUserDataState(state).authStatus
export const selectUserData = (state: GlobalState)=> selectUserDataState(state).userData

export default userReducer.reducer


