import { Component, Input, OnInit, Output } from '@angular/core';
import { Bin, Status } from 'src/app/models/bin.model';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() mapHeight: number;
  @Input() mapWidth: number;
  @Input() data: any;

  lat = 7.189464;
  lng = 79.858734;
  zoom = 15;

  // bins: Bin[] = [
  //   {
  //     id: "B001",
  //     latitude: 7.189464,
  //     longitude: 79.858734,
  //     status: Status.Filled
  //   },
  //   {
  //     id: "B002",
  //     latitude: 7.3,
  //     longitude: 80,
  //     status: Status.Filling
  //   },
  //   {
  //     id: "B003",
  //     latitude: 6.9,
  //     longitude: 80,
  //     status: Status.Filled
  //   }
  // ];

  bins: Bin[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.bins.push(
      {
        id: "B003",
        latitude: this.data.latitude,
        longitude: this.data.longitude,
        status: Status.Filled
      }

    )
  }

  clickedMarker(m: Bin, i: number) {
    console.log("clicked");
    this.dataService.selectedBin = m;
  }

}

