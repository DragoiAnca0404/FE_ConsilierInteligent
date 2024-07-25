import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/main/services/role.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  role: any;

  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit(): void {
    this.role = this.roleService.role;
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }

  navigate_MapHolland() {
    this.router.navigate(['/map-Holland']);
  }
}
