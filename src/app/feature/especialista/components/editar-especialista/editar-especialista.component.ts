import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {EspecialistaService} from '@especialista/shared/servicio/especialista.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-especialista',
  templateUrl: './editar-especialista.component.html',
  styleUrls: ['./editar-especialista.component.scss']
})
export class EditarEspecialistaComponent implements OnInit, OnChanges {
  @Input('showmodal') showmodal: boolean;
  @Output () showModalOutput: EventEmitter<boolean> = new EventEmitter();
  @Output ()  actulizarLista: EventEmitter<string> = new EventEmitter();
  isVisible = false;
  setData: any;
  MENSAGE: string;
  constructor(protected especialistaServices: EspecialistaService) {
    this.MENSAGE = ' El usuario se actulizado con exito';
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes.showmodal.currentValue != undefined){
        this.isVisible = changes.showmodal.currentValue;
        this.setData = changes.showmodal.currentValue;
      }
    }


  ngOnInit(): void {

  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.showModalOutput.emit(false);
  }
  actulizarEspecilista(event: any){
    this.especialistaServices.actulizar(event, this.setData.identificacion).subscribe(data => {
      console.log(data);
      this.showModalOutput.emit(false);
      this.actulizarLista.emit(event.identificacion);
      Swal.fire(this.MENSAGE);
    });
    console.log(event);
  }

}
