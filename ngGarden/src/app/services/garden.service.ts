import { Injectable } from '@angular/core';
import { Watering } from '../models/watering';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GardenService {


  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/watering';


  constructor(private http: HttpClient)
  //http clent, pipes

{ }


//C
create(newWatering) {
  return this.http.post<Watering>(this.url, newWatering);
    // .pipe(
    //   catchError((err: any) => {
    //     console.log('error in service create');
    //     return throwError('oh no, error creating pokemon in the service level!');
    //   })
    // );
}



//R
index(){
  return this.http.get<Watering[]>(this.url);
  // .pipe(
  //   catchError((err: any) => {
  //     console.log(err);
  //     return throwError('error in poke service index method');
  //   })
  // );
}



//U
update(watering){

}


//D
destroy(){

}

}
