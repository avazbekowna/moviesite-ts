import {EnumActionTypes, IUserState, TypeUsersAction} from "../../types/users";


const initialState:IUserState=  {
    users: [],
    loading: false,
    error: null,

}


export const UserReducer =    (state = initialState , action: TypeUsersAction): IUserState=> {
    switch (action.type){
        case EnumActionTypes.FETCH_USERS:
            return {...state , loading: true}
        case EnumActionTypes.FETCH_USERS_SUCCESS:
            return {...state,loading:false,error: null ,  users:action.payload}
        case EnumActionTypes.FETCH_USERS_ERROR:
            return {...state,loading: false, users:[],error: action.payload}
        default:
            return state

    }
}