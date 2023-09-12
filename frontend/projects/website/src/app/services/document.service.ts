import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) {}

  getDocumentsByEmail(userEmail: string) {
    const apiUrl = `http://localhost:8082/documents/byEmail?userEmail=${userEmail}`;
    return this.http.get(apiUrl);
  }
}
