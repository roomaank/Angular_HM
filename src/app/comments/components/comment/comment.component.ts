import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../../models/Comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  comment:Comment;

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSinglePost()
  }

  private getSinglePost(){
    this.activatedRoute.params
      .subscribe(params => {
        this.commentService.getSingleComment(params.id)
          .subscribe(value => {
            this.comment = value;
          })
      })
  }

  navigateToAllComments(){
    this.router.navigate(['comments'])
  }

}
