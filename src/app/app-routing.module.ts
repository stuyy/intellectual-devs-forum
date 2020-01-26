import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumPageComponent } from './components/forum-page/forum-page.component';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';
import { ForumTopicPageComponent } from './components/Forum/forum-topic-page/forum-topic-page.component';
import { ForumPostPageComponent } from './components/Forum/forum-post-page/forum-post-page.component';


const routes: Routes = [
  { path: 'guest', component: GuestPageComponent },
  { path: 'forum', pathMatch: 'full', component: ForumPageComponent },
  { path: 'forum/:category/:topic', pathMatch: 'full', component: ForumTopicPageComponent },
  { path: 'forum/:category', redirectTo: 'forum' },
  { path: 'forum/topic', redirectTo: 'forum'},
  { path: 'forum/:category/:topic/:title/:id',  pathMatch: 'full', component: ForumPostPageComponent },
  { path: 'logout', component: LogoutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
