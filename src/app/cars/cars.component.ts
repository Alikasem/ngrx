import { Component, OnInit } from '@angular/core';
import { PracticesService } from '../services/practices.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carsList: any;
  constructor(private practices: PracticesService) { }

  ngOnInit(): void {
    this.carsList = this.practices.getPractices();
    console.log(this.carsList)
  }

}
