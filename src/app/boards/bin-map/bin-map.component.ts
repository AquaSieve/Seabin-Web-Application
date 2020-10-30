import { Component, Input, OnInit } from '@angular/core';
import { Bin } from 'src/app/models/bin.model';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-bin-map',
  templateUrl: './bin-map.component.html',
  styleUrls: ['./bin-map.component.css']
})
export class BinMapComponent implements OnInit {
  @Input() selectedBin: Bin;
  data: any;

  binId: string = "No bin selected";
  binStatus: any = "No bin selected";
  assignee = null;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = {
      latitude: 7.205302,
      longitude: 79.857459
    };
  }

  markerOnClick(event) {
    this.binId = event.id;
    this.binStatus = (event.status == 1) ? "STILL FILLING" : "FILLED";
    this.assignee = event.person
  }

}

