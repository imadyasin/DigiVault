import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  getDocumentsByEmail(userEmail: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
