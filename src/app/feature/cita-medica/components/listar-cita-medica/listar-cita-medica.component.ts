import { Component, OnInit } from '@angular/core';
import {Paciente} from '@citaMedica/shared/modelo/paciente';
import {PacienteService} from '@citaMedica/shared/paciente.service';

@Component({
  selector: 'app-listar-cita-medica',
  templateUrl: './listar-cita-medica.component.html',
  styleUrls: ['./listar-cita-medica.component.scss']
})

export class ListarCitaMedicaComponent implements OnInit {
  public listaPaciente: Paciente[];
  //listOfData: Paciente[] = [];
  constructor( protected  pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.listarCitaMedicas();

  }
  listarCitaMedicas(){
    this.pacienteService.consultar().subscribe(data => {
      this.listaPaciente = data;
    });
  }
  buscarUsuario(event: string){
    console.log(event);
  }

}
