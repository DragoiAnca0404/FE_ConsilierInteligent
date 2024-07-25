import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private httpClient: HttpClient) { }

  defaultBeUrl: string = environment.backendUrl;


  displayAllSubjects(): Observable<any> {
    let requestParams = new HttpParams();
    return this.httpClient.get(`${this.defaultBeUrl}/Chestionar/ViewTests`);
  }

  displayPasions(): Observable<any> {
    let requestParams = new HttpParams();
    //   requestParams = requestParams.append('username', params.username);
    return this.httpClient.get(`${this.defaultBeUrl}/Chestionar/ViewPasiuni`);
  }

  predictJob(passions: string): Observable<any> {
    // Trimite cererea HTTP către backend cu parametrul "passions"
    return this.httpClient.get(`${this.defaultBeUrl}/PredictJob/predict`, { params: { passions: passions } });
  }

  predictHolland(raspunsuri: number[]): Observable<any> {
    let params = new HttpParams();
    raspunsuri.forEach((raspuns, index) => {
      params = params.append('raspunsuri', raspuns.toString());
    });
    return this.httpClient.get<any>(`${this.defaultBeUrl}/TestHollandAntrenare/predict`, { params });
  }


  getIntrebari(id_chestionar: number): Observable<any> {
    return this.httpClient.get(`${this.defaultBeUrl}/Chestionar/ReturnIntrebari`, { params: { id_chestionar: id_chestionar } });
  }

  getRaportInfo(denumire_solutie : string): Observable<any> {
    return this.httpClient.get(`${this.defaultBeUrl}/RaportHolland`, { params: { denumire_solutie : denumire_solutie  } });
  }

  getMetricsPassion(): Observable<any> {
    return this.httpClient.get(`${this.defaultBeUrl}/PredictJob/metrici`);
  }

  getMetricsHolland(): Observable<any> {
    return this.httpClient.get(`${this.defaultBeUrl}/TestHollandAntrenare/metrici`);
  }
}
