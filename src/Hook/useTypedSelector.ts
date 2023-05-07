import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../store/Reducers";

export const  useTypedSelector: TypedUseSelectorHook<rootState> = useSelector