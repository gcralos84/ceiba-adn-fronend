import { Injectable } from '@angular/core';
import { Especialista } from '../modelo/especialistas';
import {HttpService} from '@core-service/http.service';


@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {

  constructor(protected http: HttpService) { }
  public consultar() {
    return this.http.doGet<Especialista[]>('http://localhost:8080/especialistas/', this.http.optsName('consultar productos'));
  }

  public guardar(especialista: Especialista) {
    return this.http.doPost<Especialista, boolean>('http://localhost:8080/especialista/', especialista,
      this.http.optsName('crear/actualizar productos'));
  }
  public actulizar(especialista: Especialista, id: string){
    return this.http.doPut<Especialista, boolean>('http://localhost:8080/especialista/' + id, especialista,
      this.http.optsName('crear/actualizar productos'));
  }
  public aconsultarAgenda(fechaCita: string, horaCita: string){
    return this.http.doGet<Especialista[]>('http://localhost:8080/especialistas/' + fechaCita + '/' + horaCita,
      this.http.optsName('crear/actualizar productos'));
  }
  public eliminar(id: string) {
     return this.http.doDelete<boolean>('http://localhost:8080/especialista/' + id,
       this.http.optsName('eliminar productos'));
   }
}
