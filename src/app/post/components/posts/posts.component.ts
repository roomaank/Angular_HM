import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:Post[] = [];

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initPostsArray();
  }

  private initPostsArray(){
    this.postService.getAllPosts()
      .subscribe(value => {
        this.posts = value
      })
  }

  navigateToMoreInfo(post){
    this.router.navigate(['posts', post.id])
  }

}
