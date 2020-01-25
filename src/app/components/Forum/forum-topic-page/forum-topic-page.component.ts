import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { ForumService } from 'src/app/services/ForumService/forum.service';
import ForumPost from 'src/app/models/ForumPost';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreatePostFormComponent } from '../../create-post-form/create-post-form.component';
import { PostEvent } from 'src/app/models/Events/PostEvent';

@Component({
  selector: 'app-forum-topic-page',
  templateUrl: './forum-topic-page.component.html',
  styleUrls: ['./forum-topic-page.component.css']
})
export class ForumTopicPageComponent implements OnInit {

  public currentPage: string = '';
  private categoryString: string = '';
  private d: any;
  constructor(private router: Router, private forumService: ForumService, private dialog: MatDialog) {
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
    });
    this.forumService.postDialogEvents.subscribe((event: PostEvent) => {
      console.log(event);
      this.d.close();
    }, err => console.log(err), () => console.log("Done"))
  }

  createPost() {
    // Open Dialog with Quill Editor
    this.d = this.dialog.open(CreatePostFormComponent, {
      height: 'auto',
      width: 'auto'
    });
    
  }
  private capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.substring(1);

}
