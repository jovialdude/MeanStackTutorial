import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUPdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostsUpdateListener() {
    return this.postsUPdated.asObservable();
  }

  addPost(post: Post) {
    // const post
    this.posts.push(post);
    this.postsUPdated.next([...this.posts]);
  }
}
