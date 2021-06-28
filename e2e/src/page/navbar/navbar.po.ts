import { by, element } from 'protractor';

export class NavbarPage {
    linkListarCitaMedica = element(by.xpath('//*[@id="/listar-cita-medica"]'));
    linkCrearCitamedica = element(by.xpath('//*[@id="/crear-cita-medica"]'));
    linkCrearEspecialista = element(by.xpath('//*[@id="/especialistas"]'));

    async clickBotonListarCitaMedica() {
        await this.linkListarCitaMedica.click();
    }
    async clickBotonCrearCitaMedica() {
      await this.linkCrearCitamedica.click();
    }
    async clickBotonCrearEspecialista() {
      await this.linkCrearEspecialista.click();
    }
}
