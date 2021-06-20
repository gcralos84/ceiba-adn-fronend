import { Component, OnInit } from '@angular/core';

interface Person {
  id: string;
  identificacion: string;
  nombre: string;
  medico: string;
  especialida: string;
  fechaCita: string;

}
@Component({
  selector: 'app-listar-cita-medica',
  templateUrl: './listar-cita-medica.component.html',
  styleUrls: ['./listar-cita-medica.component.scss']
})

export class ListarCitaMedicaComponent implements OnInit {
  listOfData: Person[] = [];

  constructor() { }

  ngOnInit(): void {

  }
  buscarUsuario(event: string){
    console.log(event)
  }

}
