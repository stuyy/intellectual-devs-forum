import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ForumAdminService } from 'src/app/services/ForumAdminPanel/forum-admin.service';
import ForumTopic from 'src/app/models/ForumTopic';
import ForumCategory from 'src/app/models/ForumCategory';
import { ForumService } from 'src/app/services/ForumService/forum.service';

@Component({
  selector: 'app-topic-create-form',
  templateUrl: './topic-create-form.component.html',
  styleUrls: ['./topic-create-form.component.css']
})
export class TopicCreateFormComponent implements OnInit {

  public categories: Array<ForumCategory> = [];
  public topicForm: FormGroup;
  constructor(private fb: FormBuilder, private forumAdminService: ForumAdminService, private forumService: ForumService) { 
    this.topicForm = fb.group({
      title: new FormControl('', Validators.required),
      parentCategory: new FormControl('', Validators.required),
      moderators: new FormControl('')
    });
  }

  ngOnInit() {
    this.forumService.getForumCategories().subscribe((cat: Array<ForumCategory>) => {
      this.categories = cat;
    });
  }
  submit() : void {
    if(this.topicForm.valid) {
      // Make HTTP POST
      let topic: ForumTopic = {
        name: this.topicForm.value.title,
        parentCategory: this.topicForm.value.parentCategory
      }
      this.forumAdminService.createForumTopic(topic)
        .subscribe((res : any) => {
          console.log(res);
        }, err => { console.log(err); })
    }
    else {
      // Do nothing.
    }
  }
}
