import { Coords } from '../../models/coords';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {

    apiUrl = 'https://api.ga.qa.proside.pt/gps/institutions.json?api_key=7bj8WdWPPWMm4ptTYv548edKDraPxKtL';

    constructor(private http: HttpClient) {

  }
  public getAllData():Observable<Coords>{
      return this.http.get<Coords>(this.apiUrl);
  }
    
}
