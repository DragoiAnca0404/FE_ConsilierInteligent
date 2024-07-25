import { Component, OnInit } from '@angular/core';

;

@Component({
  selector: 'app-creare-test-nou',
  templateUrl: './creare-test-nou.component.html',
  styleUrls: ['./creare-test-nou.component.scss']
})
export class CreareTestNouComponent {
  componentaAdaugataCreareTest = false;

  adaugaComponentaCreareTest() {
    this.componentaAdaugataCreareTest = true;
  }
}
