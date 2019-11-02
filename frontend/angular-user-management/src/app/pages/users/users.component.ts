import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';

import { pull, map, find, each } from 'lodash';
import { trigger, state, animate, transition, style } from '@angular/animations';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  userList;
  usersListDisplay;

  // MatPaginator Inputs
  length: number;
  pageSize: number;
  pageSizeOptions: Array<number> = [3, 5, 10, 25];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.pageSize = 5;
    this.usersService.userList.subscribe(userList => {
      this.userList = userList;
      this.length = this.userList.length;
      this.updateUsersListDisplay();
    });
  }

  deleteUser(user): void {
    this.usersService.deleteUser( user );
  }

  searchEvent($searchArray): void {
    each( this.userList, (el) => {
      /** set display to true/false depending on find() result */
      el.display = find($searchArray, el);
    });
  }

  updateUsersListDisplay(pageIndex = 0 ): void {
    /** define how many users to show */
    const step = pageIndex * this.pageSize;
    this.usersListDisplay = this.userList.slice( step, step + this.pageSize );
  }

  onPaginationChange(pageEvent: PageEvent): void {
      this.pageSize =  pageEvent.pageSize;
      this.updateUsersListDisplay(pageEvent.pageIndex);
  }
}
