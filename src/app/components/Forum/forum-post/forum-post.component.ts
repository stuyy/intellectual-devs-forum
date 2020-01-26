import { Component, OnInit, Input } from '@angular/core';
import ForumPost from 'src/app/models/ForumPost';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {

  @Input() post: ForumPost;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.url)
  }

  openPostPage() : void {
    console.log(this.post);
    let title = this.post.title.replace(new RegExp(/\s/g), "-");
    this.router.navigate([`${title}/${this.post._id}`], { relativeTo: this.activatedRoute });
  }
}
