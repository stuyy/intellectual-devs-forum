import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ForumPageComponent } from './components/forum-page/forum-page.component';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';
import { ForumAdminPanelComponent } from './components/forum-admin-panel/forum-admin-panel.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { ForumDialogComponent } from './components/ReuseableDialogs/forum-dialog/forum-dialog.component';
import { CategoryCreateFormComponent } from './components/ForumAdminTools/category-create-form/category-create-form.component';
import { TopicCreateFormComponent } from './components/ForumAdminTools/topic-create-form/topic-create-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ForumCategoryComponent } from './components/Forum/forum-category/forum-category.component';
import { ForumTopicComponent } from './components/Forum/forum-topic/forum-topic.component';
import { ForumPostComponent } from './components/Forum/forum-post/forum-post.component';
import { ForumTopicPageComponent } from './components/Forum/forum-topic-page/forum-topic-page.component';

import { QuillModule } from 'ngx-quill';
import { CreatePostFormComponent } from './components/create-post-form/create-post-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ForumPageComponent,
    GuestPageComponent,
    LogoutPageComponent,
    ForumAdminPanelComponent,
    ForumDialogComponent,
    CategoryCreateFormComponent,
    TopicCreateFormComponent,
    ForumCategoryComponent,
    ForumTopicComponent,
    ForumPostComponent,
    ForumTopicPageComponent,
    CreatePostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule, MatCardModule,
    MatInputModule, MatFormFieldModule, MatExpansionModule, MatSelectModule,
    QuillModule.forRoot({
      
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ForumDialogComponent, CategoryCreateFormComponent, TopicCreateFormComponent, CreatePostFormComponent]
})
export class AppModule { }
