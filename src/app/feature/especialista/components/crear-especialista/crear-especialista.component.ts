import {Component, OnInit, Output, EventEmitter, Input, TemplateRef} from '@angular/core';
import {EspecialistaService} from '@especialista/shared/servicio/especialista.service';



@Component({
  selector: 'app-crear-especialista',
  templateUrl: './crear-especialista.component.html',
  styleUrls: ['./crear-especialista.component.scss']
})
export class CrearEspecialistaComponent implements OnInit {
  @Output () valueResponse: EventEmitter<string> = new EventEmitter();
  @Input() customTemplate: TemplateRef<HTMLElement>;
  isVisible = false;

  constructor( protected  especialistaServices: EspecialistaService) { }

  ngOnInit(): void {
  }
  crearEspecialista( event: any){

      this.especialistaServices.guardar(event).subscribe(data => {
        console.log(data);
        this.valueResponse.emit('ACTULIZAR-lIST-DATA');
      }, error => {
          console.log(error.error);
      });
    }

}
