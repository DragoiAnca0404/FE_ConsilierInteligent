import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  role: any;

  constructor() {
    this.role = localStorage.getItem('role');
  }
}
