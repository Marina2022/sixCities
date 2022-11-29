import {store} from "../index";

export type GlobalState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
