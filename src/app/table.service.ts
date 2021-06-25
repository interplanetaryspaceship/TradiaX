import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient:HttpClient) { }

  public fetchUsers(){
    return this.httpClient.get("https://corona.lmao.ninja/v3/covid-19/countries");
  }
}
