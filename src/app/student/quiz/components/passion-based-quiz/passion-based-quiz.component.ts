import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../../services/quiz-service.service';
import { MatSelect } from '@angular/material/select';
import { timer } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

interface Passion {
  pasiune: string;
}

@Component({
  selector: 'app-passion-based-quiz',
  templateUrl: './passion-based-quiz.component.html',
  styleUrls: ['./passion-based-quiz.component.scss']
})
export class PassionBasedQuizComponent implements OnInit {
  pasions: Passion[];
  response: string;
  componentaAdaugata = false;
  loading: boolean = false;
  selectedValues: string[] = [];
  isButtonDisabled = true;
  afiseazaRezultatul: boolean = true; 
  metrics: any;

  constructor(private shared: QuizServiceService, private spinner: NgxSpinnerService) {
    this.shared.displayPasions().subscribe(data => {
      console.log("data", data);
      this.pasions = data;
    });
  }

  ngOnInit(): void { }

  goBack() {
    this.afiseazaRezultatul = false;
  }

  onSelect(value: string, select: MatSelect) {
    if (!this.selectedValues.includes(value)) {
      this.selectedValues.push(value);
      select.errorState = false;
    } else {
      console.log("Valoarea deja selectată.");
      select.errorState = true;
    }

    this.isButtonDisabled = this.selectedValues.length < 5;
  }

  loadMetrics(): void {
    this.shared.getMetricsPassion()
      .subscribe((data: any) => {
        this.metrics = data;
      }, error => {
        console.error('Error fetching metrics:', error);
      });
  }

  onSubmit() {
    this.spinner.show(); 
    this.loading = true; 

    timer(5000).subscribe(() => {
      this.loading = false; 
      this.componentaAdaugata = true; 

      const passionsString = this.selectedValues.join(',');

      this.shared.predictJob(passionsString).subscribe(response => {
        console.log("Răspuns de la backend:", response);
        this.response = response;
        this.loadMetrics(); 
      }, error => {
        console.error("Eroare în timpul trimiterea datelor către backend:", error);
      });
    });
  }
}