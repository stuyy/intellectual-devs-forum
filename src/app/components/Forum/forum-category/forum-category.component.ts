import { Component, OnInit, Input } from '@angular/core';
import ForumCategory from 'src/app/models/ForumCategory';

@Component({
  selector: 'app-forum-category',
  templateUrl: './forum-category.component.html',
  styleUrls: ['./forum-category.component.css']
})
export class ForumCategoryComponent implements OnInit {

  @Input() category: ForumCategory;

  constructor() { }

  ngOnInit() {
    
  }

}
