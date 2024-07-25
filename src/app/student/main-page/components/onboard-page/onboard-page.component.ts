import { Component } from '@angular/core';
import { RoleService } from 'src/app/main/services/role.service';

@Component({
  selector: 'app-onboard-page',
  templateUrl: './onboard-page.component.html',
  styleUrls: ['./onboard-page.component.scss']
})
export class OnboardPageComponent {
  role: any;

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.role = this.roleService.role;
  }
}
