import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material-cdk.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    NavBarComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyB8j-ipBRnWezBUReNdSkxq903ceZWurN8'
    })
  ],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule { }
