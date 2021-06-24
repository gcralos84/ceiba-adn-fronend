import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {EspecialistaService} from '@especialista/shared/servicio/especialista.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-especialista',
  templateUrl: './eliminar-especialista.component.html',
  styleUrls: ['./eliminar-especialista.component.scss']
})
export class EliminarEspecialistaComponent implements OnInit, OnChanges{
  @Input('identificacion') identificacion: string;
  @Output ()  actulizarLista: EventEmitter<string> = new EventEmitter();
  MENSAGE: string;
  constructor(protected  especialistaServices: EspecialistaService) {
    this.MENSAGE = ' El usuario se elimino con exito';
  }

  ngOnInit(): void {
  }

  eliminar(id: string){
      this.especialistaServices.eliminar(id).subscribe(data => {
         this.actulizarLista.emit(id);
         Swal.fire(this.MENSAGE);
         console.log(data);
      }, error => {
        console.log(error);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.identificacion.currentValue != undefined){
      this.eliminar(changes.identificacion.currentValue);
    }

  }
}
