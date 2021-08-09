import {IGETUsers} from '../interfaces'

export interface UserDataList {
    dataUser: IGETUsers | null,
    update: boolean
}

export enum UserActionTypes {
    GET_DATA = "GET_DATA",
    UPDATE = "UPDATE"
}

type Actions = {type: UserActionTypes.GET_DATA, payload: IGETUsers} | {type: UserActionTypes.UPDATE, payload: boolean}

const initialState : UserDataList = {
    dataUser: null,
    update: true
}

const userDataList = (state = initialState, action: Actions) => {
    switch (action.type) {
        case UserActionTypes.GET_DATA:
            return {...state, dataUser: action.payload, update: false}
        case UserActionTypes.UPDATE:
            return  {...state, update: action.payload}
        default:
            return {...state}
    }
}

export default userDataList;
