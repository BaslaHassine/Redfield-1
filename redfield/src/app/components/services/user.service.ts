import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
  addUsers(object: Object){
    return this.http.post('http://localhost:3000/user/signup' , object)

}

getAllDemand(){
  return this.http.get('http://localhost:3000/demand/all')
}

}
