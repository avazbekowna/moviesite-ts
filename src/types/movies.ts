export interface IMoviesState{
    movies: any [],
    loading: boolean,
    error: null | string
    page: number
}
export enum MoviesActionTypes {
    FETCH_MOVIES = "FETCH_USERS",
    FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS",
    FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR",
    SET_NEW_PAGE = "SET_NEW_PAGE"
}

interface IFetchMoviesAction {
    type: MoviesActionTypes.FETCH_MOVIES
}
interface IFetchMoviesSuccessAction {
    type: MoviesActionTypes.FETCH_MOVIES_SUCCESS
    payload: any
}
interface IFetchMoviesErrorAction {
    type: MoviesActionTypes.FETCH_MOVIES_ERROR
    payload: string
}

interface IFetchMoviesSetPageAction{
    type: MoviesActionTypes.SET_NEW_PAGE
    payload: number
}

export type TypeMoviesAction =
    IFetchMoviesAction
    | IFetchMoviesSuccessAction
    | IFetchMoviesErrorAction
    |IFetchMoviesSetPageAction