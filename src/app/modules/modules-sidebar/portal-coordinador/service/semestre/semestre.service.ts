import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Semestre } from 'src/app/core/models/semestre';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  public URL:string = "http://localhost:8082/api/semestre"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getallSemestres():Observable<Semestre[]>{
    return this.httpClient.get<Semestre[]>(`${this.URL}/listarsemestre`);
  }
}
