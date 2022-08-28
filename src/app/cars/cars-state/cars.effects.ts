
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { practice } from 'src/app/models/pratice.model';
import { PracticesService } from 'src/app/services/practices.service';
import * as practicesActions from './cars.actions';

@Injectable()

export class practicesEffects {
  constructor(private actions$: Actions, private practiceService: PracticesService){ }
    getpractices$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(practicesActions.carsListAction),
        switchMap(() => {
          return this.practiceService.getPractices().pipe(
            map((practices: practice[]) =>{
            return practicesActions.loadPracticesSuccess({practices})
          }))
        }
        )
      )
    }, {dispatch: false})
}

