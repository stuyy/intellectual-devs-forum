import { Component, OnInit, Input } from '@angular/core';
import ForumTopic from 'src/app/models/ForumTopic';

@Component({
  selector: 'app-forum-topic',
  templateUrl: './forum-topic.component.html',
  styleUrls: ['./forum-topic.component.css']
})
export class ForumTopicComponent implements OnInit {

  @Input() forumTopic: ForumTopic;
  public url: string;
  public category: string;

  constructor() { }

  ngOnInit() {
    this.url = this.forumTopic.name.toLowerCase().replace(new RegExp(/\s/g), '-');
    this.category = this.forumTopic.parentCategory.toLowerCase().replace(new RegExp(/\s/g), '-');
  }

}
