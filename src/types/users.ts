export interface IUserState{
    users: any [],
    loading: boolean,
    error: null | string
}
export enum EnumActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface IFetchUsersAction {
    type: EnumActionTypes.FETCH_USERS
}
interface IFetchUsersSuccessAction {
    type: EnumActionTypes.FETCH_USERS_SUCCESS
    payload: any
}
interface IFetchUsersErrorAction {
    type: EnumActionTypes.FETCH_USERS_ERROR
    payload: string
}

export type TypeUsersAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction