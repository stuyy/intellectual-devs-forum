import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { ForumService } from 'src/app/services/ForumService/forum.service';
import ForumPost from 'src/app/models/ForumPost';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreatePostFormComponent } from '../../create-post-form/create-post-form.component';
import { PostEvent } from 'src/app/models/Events/PostEvent';
import { MatSnackBar } from '@angular/material/snack-bar';
import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forum-topic-page',
  templateUrl: './forum-topic-page.component.html',
  styleUrls: ['./forum-topic-page.component.css']
})
export class ForumTopicPageComponent implements OnInit {

  public currentPage: string = '';
  public posts: Observable<Array<ForumPost>>;
  private category: string = '';
  private d: any;
  constructor(private router: Router, 
    private forumService: ForumService, 
    private dialog: MatDialog, 
    private snackbar: MatSnackBar,
    private location: Location) {
    this.router.events.subscribe((route: RouterEvent) => {
      try { 
        this.currentPage = this.router.url.split("/").pop().replace(new RegExp(/-/g), ' ');
        this.category = this.router.url.split("/")[2].replace(new RegExp(/\-/g), ' ');
      }
      catch(err) {
        
      }
    });
  }
  
  ngOnInit() {
    this.currentPage = this.currentPage.split(" ").map(t => this.capitalize(t)).join(" ");
    this.category = this.category.split(" ").map(t => this.capitalize(t)).join(" ");
    // Fetch API with current page to get all forum posts.
    // this.forumService.getForumPosts(this.category, this.currentPage).subscribe((posts : Array<ForumPost>) => {
    //   this.posts = posts;

    // }, (err : HttpErrorResponse) => {
    //   console.log(err);
    // });
    this.posts = this.forumService.getForumPosts(this.category, this.currentPage).pipe(share());
    console.log(this.posts)
    // Subscribe to Events for creating posts.
    this.forumService.postDialogEvents.subscribe((event: PostEvent) => {
      console.log(event);
      if(event.name === 'cancelled') {
        this.d.close();
      }
      else if(event.name === 'created') {
        this.snackbar.open('Post created!', 'Dismiss', { duration: 5000 });
        this.d.close();
      }
    }, err => console.log(err), () => console.log("Done"))
  }

  createPost() {
    // Open Dialog with Quill Editor
    this.d = this.dialog.open(CreatePostFormComponent, {
      height: 'auto',
      width: 'auto',
      data: {
        category: this.category,
        topic: this.currentPage
      }
    });
    
  }

  goBack() : void {
    this.location.back();
  }
  private capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.substring(1);

}
