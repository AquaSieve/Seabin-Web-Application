import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() mapHeight: number;
  @Input() mapWidth: number;

  lat = 7.189464;
  lng = 79.858734;
  zoom = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
