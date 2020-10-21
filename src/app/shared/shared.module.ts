import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material-cdk.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { AgmCoreModule } from '@agm/core';

import { BinCardComponent } from './bin-card/bin-card.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    NavBarComponent,

    BinCardComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MatIconModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAnQIrbexL15BeN97xOY7nOjcQkJZfJsig'
    })
  ],
  exports: [
    NavBarComponent, BinCardComponent,
    MapComponent
  ]
})
export class SharedModule { }
