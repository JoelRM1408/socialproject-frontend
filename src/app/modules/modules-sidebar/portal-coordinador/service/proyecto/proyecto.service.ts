import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/core/models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  public URL:string = "http://localhost:8082/api/proyectos"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getallProyectos():Observable<Proyecto[]>{
    //return this.httpClient.get(`${this.URL}/listarlibros`)
    return this.httpClient.get<Proyecto[]>(this.URL+"/listarproyecto")
  }
  public saveProyecto(libro:any):Observable<Proyecto>{
    return this.httpClient.post<Proyecto>(`${this.URL}/insertarproyecto`,libro)
  }
  public deleteProyecto(id:number):Observable<any>{
    return this.httpClient.delete(`${this.URL}/eliminarproyecto/${id}`)
  }
  public editarProyecto(id: number, nuevoProyecto: Proyecto): Observable<Proyecto> {
    return this.httpClient.put<Proyecto>(`${this.URL}/editarproyecto/${id}`,nuevoProyecto)
  }
  public getProyectotById(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(`${this.URL}/buscarproyecto/${id}`);
  }
}

