import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ep } from 'src/app/core/models/ep';

@Injectable({
  providedIn: 'root'
})
export class EpService {

  public URL:string = "http://localhost:8082/api/esp"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getallEp():Observable<Ep[]>{
    return this.httpClient.get<Ep[]>(`${this.URL}/listarep`);
  }
  public getEpbyFacu(facultadid: number): Observable<Ep[]> {
    return this.httpClient.get<Ep[]>(`${this.URL}/buscarepfacu/${facultadid}`);
  }
}
