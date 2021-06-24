import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.scss']
})
export class EspecialistaComponent implements OnInit {
  actulizar: string;
  identificacion: string;
  showModal: boolean;
  constructor() { }

  ngOnInit(): void {

  }
  valueResponse(event: string){
    this.actulizar = event;
  }
  actulizarLista(event: string){
    this.actulizar = event;
  }
  eliminarEspecialista(event: string){
   this.identificacion = event;
  }
  mostarModal(event: boolean){
    this.showModal = event;
  }
  showModalOutput(event: boolean){
    this.showModal = event;
  }
}
