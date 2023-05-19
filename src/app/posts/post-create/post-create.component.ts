import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  // message = "Your text appears here";
  title="";
  content="";

  onClickAddPost() {
    // this.message = this.userInput;
  }
}
