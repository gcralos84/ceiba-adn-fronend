import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/listar-cita-medica', nombre: 'Consulta Medica' },
    { url: '/crear-cita-medica', nombre: 'Agregar Cita Medica' },
    { url: '/especialistas', nombre: 'Gestionar Especialista' }

  ];


}
