import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { practice } from 'src/app/models/pratice.model';
import { carsListAction } from '../cars-state/cars.actions';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  practices$: Observable<practice[]>
  constructor(private store: Store<{practice: practice[]}>) {
    this.practices$ = this.store.select(state => {
      console.log("state",state)
      return state.practice
    })
    }

    ngOnInit(): void {
      this.store.dispatch(carsListAction());
      this.practices$.subscribe(res => {
        console.log("inlis",res)
      })
      // console.log(this.practices$)

  }

}
