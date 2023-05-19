import { Component } from '@angular/core'

@Component ({
  selector:'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent{
  // posts = [

    // {title: "First Post", content: "My First Posts"},
    // {title: "Second Post", content: "My Second Posts"},
    // {title: "Third Post", content: "My Third Posts"}
  // ]
  posts = [
    {
      title:String,
      content:String
    }
  ];

  isPostsListEmpty() {
    return this.posts.length > 0;
  }
}
