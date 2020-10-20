import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  callScreen(screenName) {
    console.log("called here")
    switch (screenName) {
      case 'Home':
        this.router.navigate(['/boards/home']);
        break;
      case 'Bin Manager':
        this.router.navigate(["/boards/bin-manager"])
        break;

      default:
        this.router.navigate(['boards/home']);
        break;
    }

  }

}
