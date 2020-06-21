import { Injectable } from '@angular/core';
import { Watering } from '../models/watering';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GardenService {

  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/watering';

  constructor(private http: HttpClient)
  { }

  // C
  create(watering: Watering) {
    return this.http.post<Watering>(this.url, watering).pipe(
      catchError((err: any) => {
        console.log('error in service create');
        return throwError('oh no, error creating watering in the service level!');
      })
    );
  }

  // R
  index(){
    return this.http.get<Watering[]>(this.url)
  .pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError('error in watering service index method');
    })
  );
  }

  // U
  update(watering: Watering){
    return this.http.put<Watering>(`${this.url}/${watering.id}`, watering).pipe(
      catchError((err: any) => {
        console.log('error in service create');
        return throwError('oh no, error updating watering in the service level!');
      })
    );
  }

  // D
  destroy(id: number){
    return this.http.delete<Watering>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log('error in service create');
        return throwError('oh no, error deleting watering in the service level!');
      })
    );
  }
}
