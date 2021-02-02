import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getSinglePost()
  }

  private getSinglePost(){
    this.activatedRoute.params
      .subscribe(params => {
        this.postService.getSinglePost(params.id)
          .subscribe(value => {
            this.post = value;
          })
      })
  }

}