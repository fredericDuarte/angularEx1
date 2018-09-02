import { Component, Input,OnInit } from '@angular/core';
import {Post} from "../models/post.model";
import {PostService} from "../service/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  @Input() index: number;

  constructor(private postsService: PostService) {}

  ngOnInit() {
  }


  onDeletePost() {
    this.postsService.removePost(this.index);
  }

  noLoveIt() {
    this.postsService.loveLess(this.index);
  }

  loveIt() {
    this.postsService.lovePlus(this.index);
  }

  getColor() {
    if(this.postLoveIts > 0) {
      return 'green';
    } else if(this.postLoveIts < 0) {
      return 'red';
    }
  }

}
