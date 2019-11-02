import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class AuthenticateService {
  /** initialize logg */
  isLogged = new BehaviorSubject<boolean>(false);
  constructor() { }

  /** set logged in as either true or false */
  setLoggedIn(value: boolean = false): void {
    this.isLogged.next(value);
  }
}
