import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component ({
  selector:'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{
  // posts = [

    // {title: "First Post", content: "My First Posts"},
    // {title: "Second Post", content: "My Second Posts"},
    // {title: "Third Post", content: "My Third Posts"}
  // ]
  storedPosts: Post[] = [];
  private postsSub: Subscription = new Subscription;
  // postsService: PostsService

  constructor(public postsService:PostsService) {
  }

  ngOnInit(): void {
    this.storedPosts=this.postsService.getPosts();
    this.postsSub.add(this.postsService.getPostsUpdateListener()
      .subscribe((posts: Post[]) => {
        this.storedPosts=posts;
      }));
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
  // isPostsListEmpty() {
  //   return this.storedPost.length; > 0;
  // }
}
