import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  defaultBeUrl: string = environment.backendUrl;

  constructor(private http: HttpClient) { }

  getString(): Observable<string> {
   // return this.http.get<string>(`${this.defaultBeUrl}`);
   return this.http.get(`${this.defaultBeUrl}`, {responseType: 'text'})

  }
}
