import { Injectable } from '@angular/core';
import  practicesData  from '../practicesData.json'

@Injectable({
  providedIn: 'root'
})
export class PracticesService {
  practices = practicesData;
  constructor() {
  }
  getPractices(){
    return JSON.parse(JSON.stringify(this.practices)) ;
  }
}
