import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumAdminService {

  constructor(private http: HttpClient) { }

  public createForumCategory(category) : Observable<any> {
    return this.http.post(`${environment.host}/forum/create/category`, category, { withCredentials: true });
  }
  public createForumTopic(topic) : Observable<any> {
    return this.http.post(`${environment.host}/forum/create/topic`, topic, { withCredentials: true });
  }
}
