import {combineReducers} from "@reduxjs/toolkit";
import dataReducer from "./reducers/dataReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  'DATA': dataReducer,
  'USER': userReducer,
})

export default rootReducer
