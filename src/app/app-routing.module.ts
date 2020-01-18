import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumPageComponent } from './components/forum-page/forum-page.component';


const routes: Routes = [
  { path: 'forum', pathMatch: 'full', component: ForumPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
