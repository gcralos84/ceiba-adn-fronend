import { Component, OnInit } from '@angular/core';
import {PacienteService} from '@citaMedica/shared/paciente.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Paciente} from '@citaMedica/shared/modelo/paciente';


@Component({
  selector: 'app-crear-cita-medica',
  templateUrl: './crear-cita-medica.component.html',
  styleUrls: ['./crear-cita-medica.component.scss']
})
export class CrearCitaMedicaComponent implements OnInit {
  current = 0;
  index = 'PACIENTE';
  paciente: Paciente;
  fechaformato: string;
  estadoGuardar: boolean;
  formGroupPaciente: FormGroup;
  buscarPorIdentificacion = new FormControl('');
  constructor(protected pacienteService: PacienteService, private  formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
      this.formGroupPaciente = this.formBuilder.group({
        identificacion: ['', [Validators.required]],
        nombre: ['', [Validators.required]],
        tipoUsuario: ['', [Validators.required]],
        fechaNacimiento: ['', [Validators.required]]
      });
  }
  buscarUsuario(){
    this.pacienteService.consultarPacienteId(this.buscarPorIdentificacion.value).subscribe(data => {
      console.log(data);
      if (data.length === 0){
        this.setCamposDataReset();
        this.enableCampos();
        this.estadoGuardar = true;
      }else{
        this.estadoGuardar = false;
        this.setCamposData(data);
        this.disableCampos();
      }
    });
  }
  agregarPaciente(){

      this.fechaformato = this.formGroupPaciente.controls.fechaNacimiento.value.toJSON().split('T', 2);
      this.formGroupPaciente.controls.fechaNacimiento.setValue(this.fechaformato[0]);
      this.paciente = this.formGroupPaciente.value;
      this.pacienteService.guardar(this.paciente).subscribe(data => {
        console.log(data);
        });
  }
  setCamposData(data: any){
    this.formGroupPaciente.controls.identificacion.setValue(data[0].identificacion);
    this.formGroupPaciente.controls.nombre.setValue(data[0].nombre);
    this.formGroupPaciente.controls.tipoUsuario.setValue(data[0].tipoUsuario);
    this.formGroupPaciente.controls.fechaNacimiento.setValue(data[0].fechaNacimineto);
  }
  setCamposDataReset(){
    this.formGroupPaciente.reset();
  }
  disableCampos(){
    this.formGroupPaciente.disable();
  }
  enableCampos(){
    this.formGroupPaciente.enable();
  }
  // flujo del formulario
  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'PACIENTE';
        break;
      }
      case 1: {
        this.index = 'CONSULTA';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

}
