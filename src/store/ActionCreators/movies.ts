import {Dispatch} from "react";
import axios from "axios";
import {MoviesActionTypes, TypeMoviesAction} from "../../types/movies";

const api_key = "45d1d56fc54beedb6c0207f9ac6cab7c"

export  const fetchingMovies = (page:number) => {
    return async (dispatch: Dispatch<TypeMoviesAction>) => {
        try {
            dispatch({type:MoviesActionTypes.FETCH_MOVIES})
            const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`)
            console.log(response)
            dispatch({type:MoviesActionTypes.FETCH_MOVIES_SUCCESS,payload: response.data.results} )
        }catch(e){
            dispatch({type: MoviesActionTypes.FETCH_MOVIES_ERROR, payload: "Произошла ошибка!!!"})

        }

    }
}

export const changeCurrentPage = (page: number) => {
    return async (dispatch: Dispatch<TypeMoviesAction>) => {
        dispatch({type: MoviesActionTypes.SET_NEW_PAGE, payload:page })
    }
}