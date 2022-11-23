import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, GlobalState} from "../index";

export const useAppSelector: TypedUseSelectorHook<GlobalState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
