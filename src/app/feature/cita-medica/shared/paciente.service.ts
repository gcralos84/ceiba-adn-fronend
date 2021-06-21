import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import {Paciente} from '@citaMedica/shared/modelo/paciente';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  constructor(protected http: HttpService ) { }

  public consultar() {
    return this.http.doGet<Paciente[]>('http://localhost:8080/paciente/', this.http.optsName('consultar productos'));
  }
  public consultarPacienteId(identificacion: string) {
    return this.http.doGet<Paciente[]>('http://localhost:8080/paciente/' + identificacion, this.http.optsName('consultar productos'));
  }

  public guardar(paciente: Paciente) {
    return this.http.doPost<Paciente, boolean>('http://localhost:8080/paciente/', paciente,
      this.http.optsName('crear/actualizar productos'));
  }
 /*
  public eliminar(producto: Producto) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${producto.id}`,
      this.http.optsName('eliminar productos'));
  }*/
}
