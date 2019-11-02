import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces';
import { assign, find, forEach, pull, map, values } from 'lodash';

@Injectable()
export class UsersService {
  private configUrl = 'assets/users.json';
  private data = [];
  private messageSource = new BehaviorSubject<Array<User>>(this.data);
  userList = this.messageSource.asObservable();

  constructor(private http: HttpClient) {
    this.updateUsers();
  }

  loadUsers() {
    return this.http.get(this.configUrl).map( resp => resp["users"] );
  }

  updateUsers() {
    this.loadUsers().subscribe( resp => {

      this.data = map(resp, user => assign(user, {display: true}) );
      this.messageSource.next( this.data  );
    });
  }

  deleteUser(user) {
    pull(this.data, user);
    this.messageSource.next( this.data );
  }
}
