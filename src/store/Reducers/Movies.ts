import {IMoviesState, MoviesActionTypes, TypeMoviesAction} from "../../types/movies";

const initialState: IMoviesState = {
    movies: [],
    loading: false,
    error: null,
    page: 1
}

export const MoviesReducer = (state = initialState, action:TypeMoviesAction): IMoviesState => {
    switch (action.type){
        case MoviesActionTypes.FETCH_MOVIES:
            return {...state, loading: true}
        case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
            return {...state, loading: false, error: null, movies:action.payload}
        case MoviesActionTypes.FETCH_MOVIES_ERROR:
            return {...state, loading:false, movies:[] , error: action.payload}
        case MoviesActionTypes.SET_NEW_PAGE:
            return {...state, page: action.payload}

        default:
            return state
    }
}