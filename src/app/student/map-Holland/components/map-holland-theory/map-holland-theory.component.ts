import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-holland-theory',
  templateUrl: './map-holland-theory.component.html',
  styleUrls: ['./map-holland-theory.component.scss']
})
export class MapHollandTheoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate_MapHolland(denumire_solutie: string): void {
    this.router.navigate(['/Informatii-Test-Holland', denumire_solutie]);
  }

 /* redirectTo(route: string): void {
    this.router.navigate([route]);
  }*/
}