import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = 'http://localhost:8082/documents/add'; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient) {}

  createUser(formData: FormData) {
    return this.http.post(`${this.baseUrl}`, formData);
  }
}
