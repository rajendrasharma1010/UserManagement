import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from './shared/material.module';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FancyImageUploaderModule } from 'ng2-fancy-image-uploader';
import { HttpClientModule } from '@angular/common/http';

/* imports */
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';

/* providers */
import { MatchInputsValidation } from './shared/matchPassword';
import { UsersService } from './pages/users/users.service';
import { AppAuthGuardService } from './app-auth-guard.service';
import { AuthenticateService } from './shared/authenticate.service';

/* declarations */
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserNewComponent } from './pages/user-new/user-new.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { InputErrorMsgComponent } from './components/input-error-msg/input-error-msg.component';
import { firstLetterUppercase } from './shared/first-letter-uppercase.pipe';
import { HighlightMeDirective } from './shared/highlight-me.directive';
import { LoginFormDialogComponent } from './components/login-form-dialog/login-form-dialog.component';
import { RestrictedAreaComponent } from './pages/restricted-area/restricted-area.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    UsersComponent,
    UserDetailsComponent,
    UserNewComponent,
    TextareaComponent,
    UserFormComponent,
    SearchInputComponent,
    InputErrorMsgComponent,
    firstLetterUppercase,
    HighlightMeDirective,
    LoginFormDialogComponent,
    RestrictedAreaComponent,
    MainmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    FancyImageUploaderModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [
    MatchInputsValidation,
    UsersService,
    AppAuthGuardService,
    AuthenticateService
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginFormDialogComponent]
})
export class AppModule { }
