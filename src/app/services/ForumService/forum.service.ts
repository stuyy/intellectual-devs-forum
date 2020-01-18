import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ForumCategory from 'src/app/models/ForumCategory';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  getForumCategories() : Observable<Array<ForumCategory>> {
    return this.http.get<Array<ForumCategory>>(`${environment.host}/forum/categories`);
  }
}
