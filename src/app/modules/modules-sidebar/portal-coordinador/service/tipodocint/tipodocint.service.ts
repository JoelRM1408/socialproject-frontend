import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipodocint } from 'src/app/core/models/tipodocint';

@Injectable({
  providedIn: 'root'
})
export class TipodocintService {

  public URL:string = "http://localhost:8082/api/tiposdocint"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getalltiposdocint():Observable<Tipodocint[]>{
    return this.httpClient.get<Tipodocint[]>(`${this.URL}/listartipodocint`);
  }

  
}
