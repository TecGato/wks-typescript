import { FetchUsersAction, DeleteUserAction } from "./actions";

export enum ActionTypes {
    fetchUsers,
    deleteUser,
  }

export type Action = FetchUsersAction | DeleteUserAction;