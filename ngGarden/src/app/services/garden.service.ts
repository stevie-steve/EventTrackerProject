import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GardenService {


  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/watering';
  constructor() { }
}
//CRUD
