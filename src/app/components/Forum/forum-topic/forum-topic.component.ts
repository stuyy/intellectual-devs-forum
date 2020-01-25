import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import ForumTopic from 'src/app/models/ForumTopic';
import { ForumService } from 'src/app/services/ForumService/forum.service';

@Component({
  selector: 'app-forum-topic',
  templateUrl: './forum-topic.component.html',
  styleUrls: ['./forum-topic.component.css']
})
export class ForumTopicComponent implements OnInit, OnDestroy {

  @Input() forumTopic: ForumTopic;
  public url: string;
  public category: string;

  constructor(private forumService: ForumService) { }

  ngOnInit() {
    this.url = this.forumTopic.name.toLowerCase().replace(new RegExp(/\s/g), '-');
    this.category = this.forumTopic.parentCategory.toLowerCase().replace(new RegExp(/\s/g), '-');
    // FETCH ENDPOINT FOR FORUM TOPICS and FORUM CATEGORY and FORUM POSTS
  }
}