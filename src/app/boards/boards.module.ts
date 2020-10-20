import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { BinMapComponent } from './bin-map/bin-map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/boards/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent, BinMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatCardModule,
    
  ]
})
export class BoardsModule { }
