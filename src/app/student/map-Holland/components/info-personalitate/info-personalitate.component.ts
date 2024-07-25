import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizServiceService } from 'src/app/student/quiz/services/quiz-service.service';

@Component({
  selector: 'app-info-personalitate',
  templateUrl: './info-personalitate.component.html',
  styleUrls: ['./info-personalitate.component.scss']
})
export class InfoPersonalitateComponent implements OnInit {
  rezultat: any;

  constructor(
    private chestionarService: QuizServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const denumire_solutie = params['denumire_solutie'];
      if (denumire_solutie) {
        this.loadRaport(denumire_solutie);
      }
    });
  }

  loadRaport(denumire_solutie: string): void {
    this.chestionarService.getRaportInfo(denumire_solutie).subscribe(
      (data) => {
        this.rezultat = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
