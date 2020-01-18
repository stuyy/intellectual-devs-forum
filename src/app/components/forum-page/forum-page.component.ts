import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.css']
})
export class ForumPageComponent implements OnInit {

  public isAdmin: boolean = false;
  
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.isAuthorized().subscribe((res: any) => {
      console.log(res);
      if(res.type === 'admin') {
        this.isAdmin = true;
      }
      else {
        this.isAdmin = false;
      }
    }, err => {
      console.log(err);
    })
  }

}
