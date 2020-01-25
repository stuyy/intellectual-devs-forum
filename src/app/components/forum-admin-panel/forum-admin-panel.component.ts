import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ForumAdminService } from 'src/app/services/ForumAdminPanel/forum-admin.service';
import ForumCategory from 'src/app/models/ForumCategory';
import { MatDialog } from '@angular/material/dialog';
import { ForumDialogComponent } from '../ReuseableDialogs/forum-dialog/forum-dialog.component';
import { CategoryCreateFormComponent } from '../ForumAdminTools/category-create-form/category-create-form.component';
import { TopicCreateFormComponent } from '../ForumAdminTools/topic-create-form/topic-create-form.component';

@Component({
  selector: 'app-forum-admin-panel',
  templateUrl: './forum-admin-panel.component.html',
  styleUrls: ['./forum-admin-panel.component.css']
})
export class ForumAdminPanelComponent implements OnInit {

  constructor(private forumAdminService: ForumAdminService,
    private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  createCategory() : void {
    // Display Modal with Create Category Form.
    this.dialog.open(ForumDialogComponent, {
      data: {
        component: CategoryCreateFormComponent
      }
    });
  } 

  createTopic() : void {
    this.dialog.open(ForumDialogComponent, {
      data: {
        component: TopicCreateFormComponent
      }
    });
  }
}
