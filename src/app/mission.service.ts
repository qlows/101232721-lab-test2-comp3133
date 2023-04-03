import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private apiURL = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getMissions(year?: string): Observable<Mission[]> {
    const url = year ? `${this.apiURL}?launch_year=${year}` : this.apiURL;
    return this.http.get<Mission[]>(url);
  }

  getMission(id: number): Observable<Mission> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Mission>(url);
  }

  getMissionsByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiURL}?launch_year=${year}`);
  }

  getMissionDetails(flight_number: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiURL}/${flight_number}`);
  }
}
