import { createAction, props } from "@ngrx/store";
import { login } from "src/app/login.model";


export const LOGIN_SUCCESS = '[Login Component success]';
export const LOGIN_FAILED = '[Login Component failed]';

export const loginActionSuccess = createAction(
  LOGIN_SUCCESS,
  props<{login: login}>()
);
export const loginActionFailed = createAction(
  LOGIN_FAILED,
  props<{login: login}>()
);
