import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', loadChildren: () => import('@citaMedica/cita-medica.module').then(mod => mod.CitaMedicaModule) },
  { path: 'especialistas', loadChildren: () => import('@especialista/especialista.module').then(mod => mod.EspecialistaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
