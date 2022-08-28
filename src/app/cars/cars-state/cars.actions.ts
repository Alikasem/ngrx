import { createAction, props } from "@ngrx/store";
import { practice } from "src/app/models/pratice.model";

export const CARS_LIST = '[Cars-list Page] list';
export const LOAD_PRACTICES_SUCCESS = '[Cars-list Page] successfully';
export const carsListAction = createAction(CARS_LIST);
export const loadPracticesSuccess = createAction(
  LOAD_PRACTICES_SUCCESS,
  props<{practices: practice[]}>()
);
