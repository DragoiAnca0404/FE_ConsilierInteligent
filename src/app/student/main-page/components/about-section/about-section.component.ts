import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {
  componentaAdaugata = false;

  adaugaComponenta() {
    this.componentaAdaugata = true;
  }
}
