import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';


@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private httpClient: HttpClient) {}
  getUsersData(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
