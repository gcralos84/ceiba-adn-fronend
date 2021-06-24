import { Component, OnInit } from '@angular/core';

import {PacienteService} from '@citaMedica/shared/servicios/paciente.service';
import {DetalleConsulta} from '@citaMedica/shared/modelo/detalle-consulta';

@Component({
  selector: 'app-listar-cita-medica',
  templateUrl: './listar-cita-medica.component.html',
  styleUrls: ['./listar-cita-medica.component.scss']
})

export class ListarCitaMedicaComponent implements OnInit {
  public listaDetatalleConsuluta: DetalleConsulta[];

  constructor( protected  pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.listarCitaMedicas();

  }
  listarCitaMedicas(){
    this.pacienteService.detalleConsulta().subscribe(data => {
      this.listaDetatalleConsuluta = data;
    });
  }
  buscarUsuario(event: string){
    console.log(event);
  }

}
