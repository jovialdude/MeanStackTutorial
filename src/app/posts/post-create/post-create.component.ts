import { Component } from "@angular/core";

import { Post } from "../post.model";
import { NgForm } from "@angular/forms";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  // message = "Your text appears here";
  //TODO; make title questions for questions user asking
  //and make content an answer receiving from ???
  // welcomeMessage = "Make Your First Post Today!"
  title="";
  content="";
  // @Output() postCreated = new EventEmitter<Post>();

  onPostAdded(form: NgForm) {
    if (form.invalid) {
      alert("Please enter valid form");
      return;
    }
    // this.message = this.userInput;
    const post: Post = {
      title: form.value.title,
      content:form.value.content
    };
    this.postsService.addPost(post);
  }

  constructor(public postsService: PostsService) {

  }
}
