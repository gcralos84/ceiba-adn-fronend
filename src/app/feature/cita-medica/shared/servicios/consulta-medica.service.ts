import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConsultaMedicaService {

  constructor(protected http: HttpService) { }


  public guardar(crearconsulta: any) {
    return this.http.doPost<any, boolean>(`${environment.endpoint}/consultamedica`, crearconsulta,
      this.http.optsName('crear/actualizar ConsultaCrear'));
  }
}
