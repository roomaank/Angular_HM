import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { 
  }

  ngOnInit(): void {
    this.getSingleUser()
  }

  private getSingleUser(){
    this.activatedRoute.params
      .subscribe(params => 
        this.userService.getSingleUser(params.id)
          .subscribe(value => this.user = value)
          )
  }





}
