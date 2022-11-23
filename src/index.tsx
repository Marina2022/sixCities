import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from "./mocks/offers";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import mainPageReducer from "./store/mainPageReducer";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = configureStore({reducer: mainPageReducer})
export type GlobalState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers}/>
    </Provider>
  </React.StrictMode>,
);
