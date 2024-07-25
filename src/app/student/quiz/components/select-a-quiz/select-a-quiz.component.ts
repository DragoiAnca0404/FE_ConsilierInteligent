import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../../services/quiz-service.service';
import { timer } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-select-a-quiz',
  templateUrl: './select-a-quiz.component.html',
  styleUrls: ['./select-a-quiz.component.scss']
})
export class SelectAQuizComponent implements OnInit {
  tests: any;
  selectedTest: string;
  componentaAdaugata = false;
  loading: boolean = false;


  constructor(private shared: QuizServiceService, private spinner: NgxSpinnerService) {


    this.shared.displayAllSubjects().subscribe(data => {
      console.log("data", data);
      this.tests = data
    })
  }

  ngOnInit(): void {
  }

  onSelect(test: any) {
    this.spinner.show();
    this.loading = true; // Show spinner
    console.log(this.loading)
    // Simulate loading for 5 seconds
    timer(5000).subscribe(() => {
      this.loading = false; // Hide spinner after 5 seconds
      this.selectedTest = test.denumire_test;
      this.componentaAdaugata = true;
    });
  }
}