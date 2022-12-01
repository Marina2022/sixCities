import {createAction} from "@reduxjs/toolkit";
import {CommentType, RoomType, UserData} from "../types/types";
import {AuthStatus} from "../consts";

export const setCity = createAction<string>('main/setCity')
export const setSortVariant = createAction<string>('main/setSortVariant')
export const offersLoaded = createAction<RoomType[]>('main/offersLoaded')
export const setIsLoading = createAction<boolean>('main/setIsLoading')
export const setAuthStatus = createAction<AuthStatus>('main/setAuthStatus')
export const setUserData = createAction<UserData>('main/setUserData')
export const setRoomData = createAction<RoomType>('main/setRoomData')
export const setNearbyData = createAction<RoomType[]>('main/setNearbyData')
export const setComments = createAction<CommentType[]>('main/setComments')
export const updateFavorite = createAction<RoomType>('main/updateFavorite')

