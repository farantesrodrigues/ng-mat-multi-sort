import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MomentModule} from 'ngx-moment';
import {MatTableModule} from '@angular/material';
import {MatMultiSortModule} from 'mat-multi-sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MomentModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMultiSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
