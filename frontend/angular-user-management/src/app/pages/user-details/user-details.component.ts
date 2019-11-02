import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../users/users.service';
import {Router} from '@angular/router';

import { assign, cloneDeep, find } from 'lodash';

import { User } from '../../interfaces';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userList;
  user: User;

  constructor(private route: ActivatedRoute,
              private Users: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.Users.userList.subscribe(userList => this.userList = userList);

    this.route.paramMap.subscribe(params => {

      this.user = cloneDeep(   find(this.userList, ['id', params.get('id') ]  ) );
    });
  }

  onSubmit($event): void {

    assign( find(this.userList, ['id', $event.id ] ), $event);
    this.router.navigateByUrl('/users');
  }

  onCancel($event) {
    this.router.navigateByUrl('/users');
  }

}
