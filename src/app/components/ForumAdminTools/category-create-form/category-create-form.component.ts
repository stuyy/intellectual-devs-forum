import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ForumAdminService } from 'src/app/services/ForumAdminPanel/forum-admin.service';
import ForumCategory from 'src/app/models/ForumCategory';

@Component({
  selector: 'app-category-create-form',
  templateUrl: './category-create-form.component.html',
  styleUrls: ['./category-create-form.component.css']
})
export class CategoryCreateFormComponent implements OnInit {

  public categoryForm: FormGroup;
  constructor(private fb: FormBuilder, private forumService: ForumAdminService) { 
    this.categoryForm = fb.group({
      title: new FormControl('', Validators.required),
      moderators: new FormControl('')
    });
  }

  ngOnInit() {

  }
  submit() : void {
    if(this.categoryForm.valid) {
      // Make HTTP POST
      let cat: ForumCategory = {
        name: this.categoryForm.value.title
      }
      this.forumService.createForumCategory(cat)
        .subscribe((res : any) => {
          console.log(res);
        }, err => { console.log(err); })

    }
    else {
      // Do nothing.
    }
  }
}
