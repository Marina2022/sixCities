import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import rootReducer from "./store/rootReducer";
import {createAPI} from "./services/api";
import {fetchOffers} from "./store/reducers/dataReducer";
import {checkAuth} from "./store/reducers/userReducer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

export const api = createAPI()

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  })
})


store.dispatch(fetchOffers())
store.dispatch(checkAuth())

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
);
