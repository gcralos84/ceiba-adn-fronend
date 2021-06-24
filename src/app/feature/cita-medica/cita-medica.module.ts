import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzSelectModule} from 'ng-zorro-antd/select';
import { CitaMedicaRoutingModule } from './cita-medica-routing.module';
import { CrearCitaMedicaComponent } from './components/crear-cita-medica/crear-cita-medica.component';
import { ListarCitaMedicaComponent } from './components/listar-cita-medica/listar-cita-medica.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FiltarUsuarioComponent } from '../../core/components/filtar-usuario/filtar-usuario.component';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {EliminarDuplicadoPipe} from '@shared/pipe/eliminar-duplicado.pipe';


@NgModule({
  declarations: [
    CrearCitaMedicaComponent,
    ListarCitaMedicaComponent,
    FiltarUsuarioComponent,
    EliminarDuplicadoPipe
  ],
    imports: [
        CommonModule,
        CitaMedicaRoutingModule,
        NzTableModule,
        NzDividerModule,
        NzInputModule,
        NzStepsModule,
        NzButtonModule,
        ReactiveFormsModule,
        FormsModule,
        NzSelectModule,
        NzDatePickerModule,
        NzDescriptionsModule
    ],
  exports: [
    NzTableModule,
    NzDividerModule,
    NzInputModule,
    NzStepsModule,
    NzButtonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CitaMedicaModule { }
