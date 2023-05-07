import {combineReducers} from "redux";
import {UserReducer} from "./User";
import {MoviesReducer} from "./Movies";

export const rootReducer = combineReducers({
    user: UserReducer,
    movie: MoviesReducer
})


export type rootState = ReturnType< typeof rootReducer>