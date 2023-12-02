import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docint } from 'src/app/core/models/docint';

@Injectable({
  providedIn: 'root'
})
export class DocintService {
  public URL:string = "http://localhost:8082/api/docsint"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getalldocsint():Observable<Docint[]>{
    //return this.httpClient.get(`${this.URL}/listarlibros`)
    return this.httpClient.get<Docint[]>(this.URL+"/listardocint")
  }
  public savedocint(libro:any):Observable<Docint>{
    return this.httpClient.post<Docint>(`${this.URL}/insertardocint`,libro)
  }
  public deletedocint(id:number):Observable<any>{
    return this.httpClient.delete(`${this.URL}/eliminardocint/${id}`)
  }
  public editardocint(id: number, nuevoDocint: Docint): Observable<Docint> {
    return this.httpClient.put<Docint>(`${this.URL}/editardocint/${id}`,nuevoDocint)
  }

  public getDocintById(id: number): Observable<Docint> {
    return this.httpClient.get<Docint>(`${this.URL}/buscardocint/${id}`);
  }

  public getDocintByTipo(tipodi: number): Observable<Docint[]> {
    return this.httpClient.get<Docint[]>(`${this.URL}/buscardocinttipo/${tipodi}`);
  }
}
