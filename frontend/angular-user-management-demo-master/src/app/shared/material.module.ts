import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatPaginatorModule,
  MatDialogModule,
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';

import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';

@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatPaginatorModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    ObserversModule,
    PlatformModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
