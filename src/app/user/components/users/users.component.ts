import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.populateUsersArray();
  }

  private populateUsersArray(){
    this.userService.getAllUsers()
      .subscribe(value => {
        this.users = value;
      })
  }

  navigateToMoreInfo(user){
    this.router.navigate(['users', user.id])
  }

}
