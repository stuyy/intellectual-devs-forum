import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public isAuthorized() : Observable<any> {
    return this.http.get<any>(`${environment.host}/auth/authorized`, { withCredentials: true });
  }

  public login() : Observable<any> {
    return this.http.get<any>(`${environment.host}/auth/discord/login`, { withCredentials: true });
  }

  public logout() : Observable<any> {
    return this.http.get<any>(`${environment.host}/auth/logout`, { withCredentials: true });
  }
}
