import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './main/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Consilier';
  
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeToMainPage();
  }

  routeToMainPage():void {
    this.router.navigateByUrl('/app-onboard-page');
  }
}