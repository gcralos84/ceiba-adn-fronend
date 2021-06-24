import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Especialista} from '@especialista/shared/modelo/especialistas';
import {EspecialistaService} from '@especialista/shared/servicio/especialista.service';

@Component({
  selector: 'app-listar-especialista',
  templateUrl: './listar-especialista.component.html',
  styleUrls: ['./listar-especialista.component.scss']
})
export class ListarEspecialistaComponent implements OnInit, OnChanges{
  @Input () value: string;
  @Output ()  eliminarEspecialista: EventEmitter<string> = new EventEmitter();
  @Output ()  showModal: EventEmitter<Especialista[]> = new EventEmitter();
  especialistaModel: Especialista[];
  constructor(protected  especialistaServices: EspecialistaService) { }



  ngOnInit(): void {
    this.listarEspecialista();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes != undefined) {
      this.listarEspecialista();
    }

  }

  listarEspecialista(){
    this.especialistaServices.consultar().subscribe(data => {
      this.especialistaModel =  data;
    });
  }
  eliminar(identificacion: string){
    this.eliminarEspecialista.emit(identificacion);
  }
  editar(data: any){
    this.showModal.emit(data);
  }

}
