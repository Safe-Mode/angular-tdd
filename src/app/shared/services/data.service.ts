import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getHomes(): Observable<any[]> {
    return this.http.get<any[]>('assets/homes.json');
  }

  bookHome(): Observable<any> {
    return this.http.post('https://run.mocky.io/v3/f48507eb-e2bf-4eb0-a3bc-683fbddf1ed7', {});
  }
}
