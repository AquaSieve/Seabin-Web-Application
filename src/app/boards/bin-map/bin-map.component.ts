import { Component, Input, OnInit } from '@angular/core';
import { Bin } from 'src/app/models/bin.model';

@Component({
  selector: 'app-bin-map',
  templateUrl: './bin-map.component.html',
  styleUrls: ['./bin-map.component.css']
})
export class BinMapComponent implements OnInit {

  @Input() bin:Bin;

  binId:string="B001";
  binStatus:any="Filled";

  constructor() { }

  ngOnInit(): void {
  }

}

