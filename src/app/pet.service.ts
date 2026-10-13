import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../models/Pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3000/pets';

  getPets(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(this.apiUrl);
  }
}
