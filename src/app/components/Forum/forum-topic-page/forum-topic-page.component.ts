import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { ForumService } from 'src/app/services/ForumService/forum.service';
import ForumPost from 'src/app/models/ForumPost';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forum-topic-page',
  templateUrl: './forum-topic-page.component.html',
  styleUrls: ['./forum-topic-page.component.css']
})
export class ForumTopicPageComponent implements OnInit {

  public currentPage: string = '';
  private categoryString: string = '';

  constructor(private router: Router, private forumService: ForumService) {
    this.router.events.subscribe((route: RouterEvent) => {
      try {
        this.currentPage = this.router.url.split("/").pop().replace(new RegExp(/-/g), ' ');
        this.categoryString = this.router.url.split("/")[2].replace(new RegExp(/\-/g), ' ');
      }
      catch(err) {
        
      }
    });
  }
  
  ngOnInit() {
    this.currentPage = this.currentPage.split(" ").map(t => this.capitalize(t)).join(" ");
    this.categoryString = this.categoryString.split(" ").map(t => this.capitalize(t)).join(" ");
    console.log(this.currentPage);
    console.log(this.categoryString)
    // Fetch API with current page to get all forum posts.
    this.forumService.getForumPosts(this.categoryString, this.currentPage).subscribe((posts : Array<ForumPost>) => {
      console.log(posts);
    }, (err : HttpErrorResponse) => {
      console.log(err);
    })
  }
  private capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.substring(1);

}
