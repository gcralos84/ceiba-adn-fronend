import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-filtar-usuario',
  templateUrl: './filtar-usuario.component.html',
  styleUrls: ['./filtar-usuario.component.scss']
})
export class FiltarUsuarioComponent implements OnInit {
  buscarUsuario  =  new  FormControl('');
  @Output('buscarUsuario')  buscarEmiter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
      this.buscarUsuario.valueChanges
        .pipe( debounceTime(300))
        .subscribe( value => this.buscarEmiter.emit(value));
  }

}
