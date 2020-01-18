import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forum-admin-panel',
  templateUrl: './forum-admin-panel.component.html',
  styleUrls: ['./forum-admin-panel.component.css']
})
export class ForumAdminPanelComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    
  }

}
