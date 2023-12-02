import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciclo } from 'src/app/core/models/ciclo';

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  public URL:string = "http://localhost:8082/api/ciclos"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getallCiclos():Observable<Ciclo[]>{
    return this.httpClient.get<Ciclo[]>(`${this.URL}/listarciclo`);
  }
}
