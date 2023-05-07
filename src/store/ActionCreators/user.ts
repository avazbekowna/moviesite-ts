import {EnumActionTypes, TypeUsersAction} from "../../types/users";
import {Dispatch} from "react";
import axios from "axios"

export  const fetchingUser = () => {
    return async (dispatch: Dispatch<TypeUsersAction>) => {
        try {
            dispatch({type: EnumActionTypes.FETCH_USERS})
            const response = await axios("https://jsonplaceholder.typicode.com/users")
            dispatch({type:EnumActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        }catch(e){
            dispatch({type:EnumActionTypes.FETCH_USERS_ERROR,payload: "Произошла ошибка!!!"})

        }

    }
}