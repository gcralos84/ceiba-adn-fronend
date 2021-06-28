// import { browser, logging } from 'protractor';
import { NavbarPage } from '../src/page/navbar/navbar.po';
import { AppPage } from '../src/app.po';
import {EspecialistaPage} from './page/especialista/especialista.po';

describe('workspace-project Producto', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let especialista: EspecialistaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    especialista = new EspecialistaPage();

  });
  it('Deberia Crear un especialist', () => {
    const  IDENTIFICACION_ESPECIALISTA = '9455255989';
    const  NOMBRE_ESPECIALISTA = 'Carlos Artuto Gonzalez';
    page.navigateTo();
    navBar.clickBotonCrearEspecialista();
    especialista.ingresarIdentificacion(IDENTIFICACION_ESPECIALISTA);
    especialista.ingresarNombre(NOMBRE_ESPECIALISTA);
    especialista.ingresartEspecialidad();
    especialista.ingresarValorEspecialida();
    especialista.clickBotonCrearEspecialista();
  });


});
