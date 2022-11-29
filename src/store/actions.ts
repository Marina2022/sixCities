import {createAction} from "@reduxjs/toolkit";
import {RoomType} from "../types/types";

export const setCity = createAction<string>('main/setCity')
export const setSortVariant = createAction<string>('main/setSortVariant')
export const offersLoaded = createAction<RoomType[]>('main/offersLoaded')
export const setIsLoading = createAction<boolean>('main/setIsLoading')
