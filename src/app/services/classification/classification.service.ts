import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  apiEndPoint = 'http://127.0.0.1:5000';

  constructor(
    private http: HttpClient
    ) { }

    getPercentage(){
      return this.http.get(this.apiEndPoint+'/percentages');
    }
}
