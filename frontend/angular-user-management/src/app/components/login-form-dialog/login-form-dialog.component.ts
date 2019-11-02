import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { AuthenticateService } from '../../shared/authenticate.service';

@Component({
  selector: 'app-login-form-dialog',
  templateUrl: './login-form-dialog.component.html',
  styleUrls: ['./login-form-dialog.component.scss']
})
export class LoginFormDialogComponent implements OnInit {
  username: string;
  password: string;
  isAuthenticated: boolean;

  constructor(
    public dialogRef: MatDialogRef<any>,
    private auth: AuthenticateService
  ) { }

  checkAuth(): boolean {
    return !!(this.username === 'test' && this.password === 'test');
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  checkCredentials(): void {
    const isValidUser = this.checkAuth();
    this.dialogRef.close( isValidUser );
    this.auth.setLoggedIn( isValidUser );
  }

  ngOnInit() {
    this.isAuthenticated = false;
  }

}
