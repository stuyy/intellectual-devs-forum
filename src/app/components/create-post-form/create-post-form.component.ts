import { Component, OnInit, Inject } from '@angular/core';
import { ForumService } from 'src/app/services/ForumService/forum.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import ForumPost from 'src/app/models/ForumPost';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css']
})
export class CreatePostFormComponent implements OnInit {

  public form: FormGroup;
  constructor(private forumService: ForumService, private fb: FormBuilder, public dialogRef: MatDialogRef<CreatePostFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.form = fb.group({
      title: new FormControl('', Validators.required),
      content: new FormControl('')
    });
  }

  ngOnInit() {

  }

  submit() : void {
    console.log(this.form.value);
    console.log(this.data);
    this.forumService.createPost({
      title: this.form.value.title,
      content: this.form.value.content,
      category: this.data.category,
      topic: this.data.topic
    }).subscribe((post: ForumPost) => {
      console.log(post);
      this.forumService.postDialogEvents.emit({
        name: 'created',
        data: post
      })
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.forumService.postDialogEvents.emit({
        name: 'error'
      })
    })
  }
  cancel() : void {
    this.forumService.postDialogEvents.emit({
      name: 'cancelled'
    });
  }
}
