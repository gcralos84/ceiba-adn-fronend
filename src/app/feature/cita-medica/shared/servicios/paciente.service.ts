import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import {Paciente} from '@citaMedica/shared/modelo/paciente';
import {DetalleConsulta} from '@citaMedica/shared/modelo/detalle-consulta';
import {environment} from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  constructor(protected http: HttpService ) {

  }
  public detalleConsulta() {
    return this.http.doGet<DetalleConsulta[]>(`${environment.endpoint}/paciente/hitorial`, this.http.optsName('consultar hitorial'));
  }
  public consultarPacienteId(identificacion: string) {
    return this.http.doGet<Paciente[]>(`${environment.endpoint}/paciente/${identificacion}`, this.http.optsName('consultar productos'));
  }

  public guardar(paciente: Paciente) {
    return this.http.doPost<Paciente, boolean>(`${environment.endpoint}/paciente`, paciente,
      this.http.optsName('crear/actualizar productos'));
  }

}
