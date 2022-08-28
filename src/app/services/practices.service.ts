import { Injectable } from '@angular/core';
import  practicesData  from '../practicesData.json'
import {defer,from} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class PracticesService {
  practices = practicesData;
  constructor() {
  }
  getPractices() {
    const myObs$ = defer(()=>from(JSON.parse(JSON.stringify(this.practices))))
    // return JSON.parse(JSON.stringify(this.practices)) ;
    return myObs$
  }
}
