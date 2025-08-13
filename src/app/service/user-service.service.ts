// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserServiceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  searchUsers(term: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users =>
        users.filter(user =>
          user.name.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }
}
