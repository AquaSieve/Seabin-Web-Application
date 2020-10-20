import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bin-card',
  templateUrl: './bin-card.component.html',
  styleUrls: ['./bin-card.component.css']
})
export class BinCardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(path) {
    switch (path) {
      case 'profile':
        this.router.navigate(['/boards/bin-profile'])

        break;

      default:
        break;
    }
  }

}
