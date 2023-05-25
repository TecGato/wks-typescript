import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url = 'http://localhost:3001/api/user';

export interface User {
    id: number,
    name: string,
    email: string,
}
export interface FetchUsersAction {
    type: ActionTypes.fetchUsers,
    payload: User[]
}

export const fetchUsers = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<User[]>(url);
        dispatch<FetchUsersAction>({
            type: ActionTypes.fetchUsers,
            payload: response.data
        })
    }
}

export interface DeleteUserAction {
    type: ActionTypes.deleteUser,
    payload: number
}

export const deleteUser = (id: number) => {
    return async (dispatch: Dispatch) => {
        await axios.delete(`${url}/${id}`);
        dispatch<DeleteUserAction>({
            type: ActionTypes.deleteUser,
            payload: id
        })
    }
}