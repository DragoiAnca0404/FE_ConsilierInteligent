import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreareSiGestionareTestService {

  constructor(private httpClient: HttpClient) { }
  defaultBeUrl: string = environment.backendUrl;

  addTestNou(data: any): Observable<any> {
    return this.httpClient.post(`${this.defaultBeUrl}/Chestionar`, data, { responseType: 'text' });
  }
}
