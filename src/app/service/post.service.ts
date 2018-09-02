import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../models/post.model';
import * as firebase from "firebase";
import DataSnapshot = firebase.database.DataSnapshot;


@Injectable()
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/Posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/Posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPosts();
  }

  lovePlus(index: number) {

   ++this.posts[index].loveIts;

  this.savePosts();
  this.emitPosts();

}
  loveLess(index: number) {
    --this.posts[index].loveIts;
  this.savePosts();
  this.emitPosts();

}


}
