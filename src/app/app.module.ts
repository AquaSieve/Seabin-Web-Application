import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatVideoModule} from 'mat-video';

import { LayoutModule } from './layouts/layout/layout.module';
import { MaterialModule } from './material/material-cdk.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatVideoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
