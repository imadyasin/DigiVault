import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from '../../users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }


  getbyemail(em: any): Observable<users> {
    const urlfind="http://localhost:8082/finduseremail";
    return this.http.get(`${urlfind}/${em}`);
  }
}
