import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from '../../models/Comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];

  constructor(
    private commentService: CommentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initCommentArray();
  }

  private initCommentArray(){
    this.commentService.getAllComments()
      .subscribe(value => {
        this.comments = value;
      })
  }

  navigateToMoreInfo(comment){
    this.router.navigate(['comments', comment.id])
  }

}
