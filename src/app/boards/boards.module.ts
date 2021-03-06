import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BinManagerComponent } from './bin-manager/bin-manager.component';
import { MaterialModule } from '../material/material-cdk.module';
import { SharedModule } from '../shared/shared.module';
import { BinProfileComponent } from './bin-profile/bin-profile.component';
import { BinMapComponent } from './bin-map/bin-map.component';

import { NgApexchartsModule } from 'ng-apexcharts';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/boards/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bin-manager',
    component: BinManagerComponent
  },
  {
    path: 'bin-profile',
    component: BinProfileComponent
  },
  {
    path: 'bin-map',
    component: BinMapComponent
  }
]

@NgModule({
  declarations: [HomeComponent, BinManagerComponent, BinProfileComponent, BinMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    NgApexchartsModule,
  ]
})
export class BoardsModule { }
