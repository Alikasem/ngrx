import { createReducer, on } from "@ngrx/store";
import { practice } from "src/app/models/pratice.model";
import { carsListAction, loadPracticesSuccess } from "./cars.actions";

// export const initialState: practice[] = [
//   {
//     codiceCasa: 'gdgdfgd',
//     consultant: 'dsdfsf',
//     client: 'rweter',
//     accountNumber: 'dsscc',
//     state: 'sdsfsdf'
//   }
// ]
// export const carListReducer = createReducer(
//   initialState,
//   on(loadPracticesSuccess, (state) => state)
// )
