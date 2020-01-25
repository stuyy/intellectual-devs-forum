import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ForumCategory from 'src/app/models/ForumCategory';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import ForumPost from 'src/app/models/ForumPost';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  getForumCategories() : Observable<Array<ForumCategory>> {
    return this.http.get<Array<ForumCategory>>(`${environment.host}/forum/categories`);
  }
  getForumTopics(name) : Observable<Array<ForumCategory>> {
    return this.http.get<Array<ForumCategory>>(`${environment.host}/forum/topics/${name}`);
  }
  getForumPosts(category, topic) : Observable<Array<ForumPost>> {
    return this.http.get<Array<ForumPost>>(`${environment.host}/forum/posts/${category}/${topic}`);
  }
}
