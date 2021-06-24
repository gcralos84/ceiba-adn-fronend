import { Component, OnInit } from '@angular/core';
import {PacienteService} from '@citaMedica/shared/servicios/paciente.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Paciente} from '@citaMedica/shared/modelo/paciente';
import TiposHoras from '@citaMedica/components/crear-cita-medica/horas';
import {EspecialistaService} from '@especialista/shared/servicio/especialista.service';
import {Especialista} from '@citaMedica/shared/modelo/especialistas-model';
import {ConsultaCrear} from '@citaMedica/shared/modelo/crearconsulta';
import {ConsultaMedicaService} from '@citaMedica/shared/servicios/consulta-medica.service';


@Component({
  selector: 'app-crear-cita-medica',
  templateUrl: './crear-cita-medica.component.html',
  styleUrls: ['./crear-cita-medica.component.scss']
})
export class CrearCitaMedicaComponent implements OnInit {
  tipoHoras = TiposHoras;
  current = 0;
  index = 'PACIENTE';
  accion = 'Siguiente';
  paciente: Paciente;
  fechaformato: string;
  estadoGuardar: boolean;
  estado: boolean;
  formGroupPaciente: FormGroup;
  formGropuInfoCita: FormGroup;
  buscarPorIdentificacion = new FormControl('');
  especialistas: Especialista[];
  nombreEs: Especialista[];
  crearCitamedicaModel: ConsultaCrear;
  constructor(
    protected pacienteService: PacienteService,
    protected especialistaServices: EspecialistaService,
    protected consultaMedicaServices: ConsultaMedicaService,
    private formBuilderPaciente: FormBuilder,
    private formBuilderInfoCita: FormBuilder) {

  }

  ngOnInit(): void {
    this.estado = false;
    this.crearFormularioPaciente();
    this.crearFormularioInfoCita();
    this.onChanges();
    this.crearCitamedicaModel = {
      identificacionEspecialista: '',
      identificacionPaciente: '',
      horaCita: '',
      fechaCita: '',
      tipoUsuario: ''
    };
  }
  crearFormularioInfoCita(){
    this.formGropuInfoCita = this.formBuilderInfoCita.group({
      fechaCitaMedica: ['', [ Validators.required]],
      horaCita: ['', [ Validators.required]],
      nombreEspecilista: ['', [ Validators.required]],
      tipoConsulta: ['', [ Validators.required]]
    });
  }
  crearFormularioPaciente(){
    this.formGroupPaciente = this.formBuilderPaciente.group({
      identificacion: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      tipoUsuario: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]]
    });
  }
  buscarfecha(){
     const fecha = new Date(this.formGropuInfoCita.controls.fechaCitaMedica.value).toISOString().split('T', 2);
     const hora = this.formGropuInfoCita.controls.horaCita.value;
     this.especialistaServices.aconsultarAgenda(fecha[0], hora).subscribe(data => {
       this.nombreEs = data;
       this.especialistas = data;
    });
  }
  onChanges(): void {
    this.formGropuInfoCita.get('tipoConsulta').valueChanges.subscribe(val => {
      if (this.nombreEs !== undefined){
        this.nombreEs = this.especialistas.filter(x =>  x.especialista === val);
      }
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
  /*setDataCrearConzaluta(dataUsuario: any, dataEspecilista: any): any{
    console.log(dataUsuario.dataUsuario);
    return   this.crearCitamedicaModel = [{
        identificacionEspecialista: dataEspecilista.identificacionEspecialista.value,
        identificacionPaciente: dataUsuario.identificacionPaciente.value,
        horaCita: dataEspecilista.horaCita.value,
        fechaCita: dataEspecilista.fechaCita.value,
        tipoUsuario: dataUsuario.tipoUsuario.value
    }];
  }*/
  setCamposDataReset(){
    this.formGroupPaciente.reset();
  }
  disableCampos(){
    this.formGroupPaciente.disable();
  }
  enableCampos(){
    this.formGroupPaciente.enable();
  }

  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
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

  agregarCita(): void {
    this.fechaformato = this.formGropuInfoCita.controls.fechaCitaMedica.value.toJSON().split('T', 2);
    this.crearCitamedicaModel = {
      identificacionEspecialista: this.formGropuInfoCita.controls.nombreEspecilista.value,
      identificacionPaciente: this.formGroupPaciente.controls.identificacion.value,
      horaCita: this.formGropuInfoCita.controls.horaCita.value,
      fechaCita: this.fechaformato[0],
      tipoUsuario: this.formGroupPaciente.controls.tipoUsuario.value
    };
    console.log(this.crearCitamedicaModel);
    this.consultaMedicaServices.guardar(this.crearCitamedicaModel).subscribe(data => {
       console.log(data);
     }, error => {
      console.log(error);
    });

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
        this.index = 'FINALIZAR';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

}
