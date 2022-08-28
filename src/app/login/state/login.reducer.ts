import { createReducer, on } from "@ngrx/store";
import * as loginActions from './login.actions';
import { login } from "src/app/models/login.model";

export interface state {
  success: boolean,
  message: string
}
export const initialState: state = {
  success: false,
  message: '',
};
export const loginReducers = createReducer(
  initialState,
  on(loginActions.loginActionSuccess, (state, {login}) => ({success : login.success, message : login.message})),
  on(loginActions.loginActionFailed, (state, {login}) => ({success : login.success, message : login.message})),
)
