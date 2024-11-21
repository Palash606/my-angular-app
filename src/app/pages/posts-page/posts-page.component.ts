import { Component } from '@angular/core';
import { PostListComponent } from "../../components/post-list/post-list.component";

@Component({
  selector: 'app-posts-page',
  imports: [PostListComponent],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {

}
