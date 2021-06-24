import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import TipoespecilidadesMedicas from '@citaMedica/components/crear-cita-medica/especilidades-medicas';
@Component({
  selector: 'app-formulario-especialista',
  templateUrl: './formulario-especialista.component.html',
  styleUrls: ['./formulario-especialista.component.scss']
})
export class FormularioEspecialistaComponent implements OnInit {
  @Output () data: EventEmitter<string> = new EventEmitter();
  @Input('setData') setData: any;
  tipoEspecialida = TipoespecilidadesMedicas;
  formEspecialista: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formularioEspecialista();
    this.setDatosFormulario();
  }

  crearEspecialista(){
    this.data.emit(this.formEspecialista.value);
  }
  formularioEspecialista(){
    this.formEspecialista = this.formBuilder.group({
      identificacion: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10,10}')]],
      nombre: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]{6,50}')]],
      especialidad: ['', [Validators.required]]

    });
  }
  setDatosFormulario(){
    this.formEspecialista.controls.identificacion.setValue(this.setData.identificacion);
    this.formEspecialista.controls.nombre.setValue(this.setData.nombre);
    this.formEspecialista.controls.especialidad.setValue(this.setData.especialidad);
  }

}
