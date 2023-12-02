import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facultad } from 'src/app/core/models/facultad';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  public URL:string = "http://localhost:8082/api/facultades"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getallFacultades():Observable<Facultad[]>{
    return this.httpClient.get<Facultad[]>(`${this.URL}/listarfacultad`);
  }
}
