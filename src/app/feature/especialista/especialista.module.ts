import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialistaRoutingModule } from './especialista-routing.module';
import { CrearEspecialistaComponent } from './components/crear-especialista/crear-especialista.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {ReactiveFormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzModalModule} from 'ng-zorro-antd/modal';
import { ListarEspecialistaComponent } from './components/listar-especialista/listar-especialista.component';
import { EditarEspecialistaComponent } from './components/editar-especialista/editar-especialista.component';
import { EspecialistaComponent } from './components/especialista/especialista.component';
import { EliminarEspecialistaComponent } from './components/eliminar-especialista/eliminar-especialista.component';
import { FormularioEspecialistaComponent } from './shared/formulario/formulario-especialista/formulario-especialista.component';

@NgModule({
  declarations: [
    CrearEspecialistaComponent,
    ListarEspecialistaComponent,
    EditarEspecialistaComponent,
    EspecialistaComponent,
    EliminarEspecialistaComponent,
    FormularioEspecialistaComponent,
  ],
  imports: [
    CommonModule,
    EspecialistaRoutingModule,
    NzCardModule,
    NzGridModule,
    NzInputModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule
  ]
})
export class EspecialistaModule { }
