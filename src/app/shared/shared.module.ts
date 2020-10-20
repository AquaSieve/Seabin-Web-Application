import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material-cdk.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

import { BinCardComponent } from './bin-card/bin-card.component';


@NgModule({
  declarations: [
    NavBarComponent,

    BinCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    NavBarComponent, BinCardComponent
  ]
})
export class SharedModule { }
