import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../../services/quiz-service.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Router } from '@angular/router';


@Component({
  selector: 'app-holland-quiz',
  templateUrl: './holland-quiz.component.html',
  styleUrls: ['./holland-quiz.component.scss']
})
export class HollandQuizComponent implements OnInit {
  intrebari: any[] = [];
  rezultat: any; 
  formularTrimis = false; 
  response: string;
  currentIndex = 0; 
  isButtonDisabled = true;
  afiseazaRezultatul: boolean = true; 
  metrics: any;

  numarOptiuniSelectate = 0;

  updateNumarOptiuniSelectate() {
    this.numarOptiuniSelectate = 0;
    this.intrebari.forEach((intrebare, index) => {
      const optiuneSelectata = document.querySelector(`input[name='intrebare_${index}']:checked`) as HTMLInputElement;
      if (optiuneSelectata) {
        this.numarOptiuniSelectate++;
      }
    });
    // Actualizeaza btn "Trimite" în funcție de nr. de optiuni selectate
    this.isButtonDisabled = this.numarOptiuniSelectate !== 12;
  }

  constructor(private chestionarService: QuizServiceService, private router: Router) {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

  }

  goBack() {
    this.afiseazaRezultatul = false;
  }

  ngOnInit(): void {
    this.getIntrebari();

  }

  loadMetrics(): void {
    this.chestionarService.getMetricsHolland()
      .subscribe((data: any) => {
        this.metrics = data;
      }, error => {
        console.error('Error fetching metrics:', error);
      });
  }
  

  generatePdf(response: any[]): void {
    const documentDefinition: any = {
      content: [
        { text: 'Raport Personalitate Holland', style: 'header' },
        { text: 'Rezultate:', style: 'subheader' },
        ...response.reduce((acc, sectiune) => {
          return acc.concat([
            { text: sectiune.denumire_sectiune, style: 'sectionHeader' },
            { text: sectiune.scurta_descriere, style: 'content' }
          ]);
        }, [])
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          font : 'Roboto',
          alignment: 'center',
          decoration: 'underline',
          margin: [0, 0, 0, 10] as any[]
        },
        subheader: {
          fontSize: 18,
          bold: true,
          margin: [0, 10, 0, 5] as any[]
        },
        sectionHeader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5] as any[] 
        },
        content: {
          fontSize: 14,
          margin: [0, 0, 0, 10] as any[] 
        }
      }
    };
    pdfMake.createPdf(documentDefinition).download('raport_personalitate_holland.pdf');
  }

  getIntrebari(): void {
    this.chestionarService.getIntrebari(24).subscribe(
      (data: any[]) => {
        this.intrebari = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.intrebari.length - 1) {
      this.currentIndex++;
    }
  }

  predict(): void {
    const optiuniMap: { [key: string]: number } = {
      'Nu îmi place': 0,
      'Neutru': 1,
      'Îmi place': 2
    };

    const raspunsuri: number[] = [];

    this.intrebari.forEach((intrebare, index) => {
      const optiuneSelectata = document.querySelector(`input[name='intrebare_${index}']:checked`) as HTMLInputElement;
      if (optiuneSelectata) {
        const valoareOptiune = optiuniMap[optiuneSelectata.value];
        if (valoareOptiune !== undefined) {
          raspunsuri.push(valoareOptiune);
        }
      }
    });

    // Actualizează starea butonului "Trimite" în funcție de completarea întrebărilor
    this.isButtonDisabled = this.numarOptiuniSelectate !== this.intrebari.length;

    // Actualizează starea butonului "Trimite" în funcție de numărul de opțiuni selectate
    this.isButtonDisabled = this.numarOptiuniSelectate !== 12;


    this.chestionarService.predictHolland(raspunsuri).subscribe(
      (response) => {
        console.log(response);
        this.rezultat = response; // stochează rezultatul
        this.formularTrimis = true; // setează flag-ul pentru a ascunde formularul și a afișa rezultatul
        this.loadMetrics(); // Load metrics data
        this.loadRaport(response[0].denumire_solutie);
      },
      (error) => {
        console.error(error);
      }
    );
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

