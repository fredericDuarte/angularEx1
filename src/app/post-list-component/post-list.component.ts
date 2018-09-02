import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {Post} from "../models/post.model";
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list-component..css']
})
export class PostListComponent implements OnInit , OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostService, private router: Router) {}

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
