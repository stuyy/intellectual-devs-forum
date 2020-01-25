import { Component, OnInit, Input } from '@angular/core';
import ForumCategory from 'src/app/models/ForumCategory';
import ForumTopic from 'src/app/models/ForumTopic';
import { ForumService } from 'src/app/services/ForumService/forum.service';

@Component({
  selector: 'app-forum-category',
  templateUrl: './forum-category.component.html',
  styleUrls: ['./forum-category.component.css']
})
export class ForumCategoryComponent implements OnInit {

  @Input() category: ForumCategory;
  public topics: Array<ForumTopic> = [];
  public loaded: boolean = false;
  
  constructor(private forumService: ForumService) { }

  ngOnInit() {
    this.forumService.getForumTopics(this.category.name)
      .subscribe((topics: Array<ForumTopic>) => {
        this.topics = topics;
        this.loaded = true;
        this.topics.forEach(topic => console.log(topic._id));
      }, err => console.log(err));
  }
}
