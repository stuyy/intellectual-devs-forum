import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrls: ['./guest-page.component.css']
})
export class GuestPageComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    window.location.href = 'https://discordapp.com/oauth2/authorize?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord%2Fredirect&scope=identify&client_id=668058857255469056';
  }
}
