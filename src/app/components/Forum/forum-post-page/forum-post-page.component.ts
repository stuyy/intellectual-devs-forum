import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { ForumService } from 'src/app/services/ForumService/forum.service';
import ForumPost from 'src/app/models/ForumPost';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forum-post-page',
  templateUrl: './forum-post-page.component.html',
  styleUrls: ['./forum-post-page.component.css']
})
export class ForumPostPageComponent implements OnInit {

  public url: string;
  public id: string;
  public post: Observable<ForumPost>;
  constructor(
    private router: Router, 
    private forumService: ForumService,
    private location: Location) { 
    this.router.events.subscribe((event: RouterEvent) => {
      if(event instanceof NavigationEnd) {
        this.url = this.router.url;
        this.id = this.router.url.split("/").pop();
      }
    });
  }

  ngOnInit() {
    this.post = this.forumService.getForumPostById(this.id).pipe(share());
  }
  goBack() : void {
    this.location.back();
  }
}
