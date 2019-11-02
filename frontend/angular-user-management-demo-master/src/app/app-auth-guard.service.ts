import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginFormDialogComponent } from './components/login-form-dialog/login-form-dialog.component';
import { Observable } from 'rxjs/Observable';

import { AuthenticateService } from './shared/authenticate.service';

@Injectable()
export class AppAuthGuardService implements CanActivate {

  private dialogTriggered = false;

  constructor(private dialog: MatDialog,
              private router: Router,
              private auth: AuthenticateService
            ) { }

  openDialog(): void {

    this.dialogTriggered = true;
    const dialogRef = this.dialog.open(LoginFormDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result === null){
        this.dialogTriggered = null;
        this.dialog.closeAll();
        this.auth.setLoggedIn( false );
        console.log('this.router');
        //this.router.navigateByUrl(this.router.url);
      }
    });

  }
  canActivate(): Observable<boolean> {
    const self = this;

    /** if it has been previously set to Null=>('No Thanks' was clicked), then reset it to false */
    if(self.dialogTriggered === null) self.dialogTriggered = false;

    return Observable.create(function (observer) {
      self.auth.isLogged.subscribe(isLogged => {
        /**
         * if not loggedin and login dialog not shown yet
        */
        if(!isLogged && self.dialogTriggered === false){
          self.openDialog();
        }
        /** if loggedin let it pass */
        else if(!!isLogged){
          observer.next(true);
        }
        /** if not loggedin and login dialog already shown,
         * means he entered wrong password so ask him again
        */
        else if(!isLogged && !!self.dialogTriggered) {
          self.dialog.closeAll();
          self.openDialog();
        }
        /** if not loggedin and clicked 'No Thanks' on the dialog box */
        else if(!isLogged && self.dialogTriggered === null){

          observer.next(false);
        }
        else{
          observer.next(false);
        }
      });
    });
  }

}
