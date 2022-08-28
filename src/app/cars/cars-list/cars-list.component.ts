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
      this.practices$ = this.store.select(state => state.practice)
    }

    ngOnInit(): void {
      this.store.dispatch(carsListAction());
      console.log(this.practices$)

  }

}
