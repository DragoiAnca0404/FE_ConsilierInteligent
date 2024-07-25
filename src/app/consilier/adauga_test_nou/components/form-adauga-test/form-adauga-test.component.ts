import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form-adauga-test',
  templateUrl: './form-adauga-test.component.html',
  styleUrls: ['./form-adauga-test.component.scss']
})
export class FormAdaugaTestComponent {

  testForm: FormGroup;

  componentaAdaugata = false;

  adaugaComponentaSucces() {
    this.componentaAdaugata = true;
  }

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {


    this.testForm = this.fb.group({
      DenumireTest: ['', [Validators.required, this.noWhitespaceValidator]],
      username: [localStorage.getItem('username'), Validators.required],
      Intrebari: this.fb.array([])
    });

    this.initializeQuestions();
  }

  initializeQuestions() {
    const intrebari = this.testForm.get('Intrebari') as FormArray;
    for (let i = 0; i < 12; i++) {
      intrebari.push(this.fb.control('', [Validators.required, this.noWhitespaceValidator]));
    }
  }

  get intrebariControls() {
    return (this.testForm.get('Intrebari') as FormArray).controls;
  }

  addTestNou(data: any): Observable<any> {
    return this.httpClient.post('https://localhost:44386/api/Chestionar', data, { responseType: 'text' });
  }

  onSubmit() {
    if (this.testForm.valid) {
      this.addTestNou(this.testForm.value).subscribe(response => {
        console.log('Test created successfully!', response);
       // this.testForm.reset();
        alert('Test creat cu succes');
        this.componentaAdaugata = true;
      }, error => {
        console.error('Error creating test!', error);
      });
    }
  }

  noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}