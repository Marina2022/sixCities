import {createAction} from "@reduxjs/toolkit";
import {RoomType} from "../types/types";

export const setCity = createAction<string>('main/setCity')
export const setOffers = createAction<RoomType[]>('main/setOffers')
export const setSortVariant = createAction<string>('main/setSortVariant')
