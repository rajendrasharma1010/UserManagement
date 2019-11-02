import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces';
import {assign, uniqueId} from 'lodash';
import {Router} from '@angular/router';
import {UsersService} from '../users/users.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})

export class UserNewComponent implements OnInit {
  userList;
  user;
  constructor(private router: Router,
              private Users: UsersService) { }
  ngOnInit() {
     this.Users.userList.subscribe(userList => this.userList = userList);

     this.user = {
      id: uniqueId(),
      name: {
        first: '',
        last: ''
      },
      description: '',
      email: '',
      picture: ''
    };
  }

  onSubmit($event) {
    this.userList.push( $event );
    this.router.navigateByUrl('/users');
  }
  onCancel($event) {
    this.router.navigateByUrl('/users');
  }
}
