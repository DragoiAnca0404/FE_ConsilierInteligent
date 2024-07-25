import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resumeContent: any;

  constructor() {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

    this.resumeContent = {
      content: [
        { text: 'Curriculum Vitae', style: 'header' },
        { text: 'Nume: John Doe', style: 'subheader' },
        { text: 'Experiență de lucru:', style: 'subheader' },
        {
          ul: [
            'Experiență 1',
            'Experiență 2',
            'Experiență 3'
          ]
        },
        { text: 'Educație:', style: 'subheader' },
        {
          ul: [
            'Diploma 1',
            'Diploma 2'
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 18,
          bold: true,
          margin: [0, 10, 0, 5]
        }
      }
    };
  }

  ngOnInit(): void {
  }

  exportToPDF() {
    pdfMake.createPdf(this.resumeContent).download('resume.pdf');
  }
}
