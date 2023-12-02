import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipopy } from 'src/app/core/models/tipopy';

@Injectable({
  providedIn: 'root'
})
export class TipopyService {

  public URL:string = "http://localhost:8082/api/tipospy"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getalltipospy():Observable<Tipopy[]>{
    return this.httpClient.get<Tipopy[]>(`${this.URL}/listartipoproy`);
  }
}
