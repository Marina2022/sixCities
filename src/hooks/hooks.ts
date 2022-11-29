import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, GlobalState} from "../types/storeTypes";

export const useAppSelector: TypedUseSelectorHook<GlobalState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
