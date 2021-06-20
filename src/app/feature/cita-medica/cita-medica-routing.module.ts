import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCitaMedicaComponent } from '@citaMedica/components/listar-cita-medica/listar-cita-medica.component';
import {CrearCitaMedicaComponent} from '@citaMedica/components/crear-cita-medica/crear-cita-medica.component';

const routes: Routes = [
  {path: '', redirectTo: '/listar-cita-medica', pathMatch: 'full'},
  {path: 'listar-cita-medica', component: ListarCitaMedicaComponent },
  {path: 'crear-cita-medica', component: CrearCitaMedicaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaMedicaRoutingModule { }
