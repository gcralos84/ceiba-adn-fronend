import {by, element } from  'protractor';

export  class   EspecialistaPage {

  private  crearEspecialista = element(by.id('crearEspecialistaBtn'));
  private  inputIdentificacion = element(by.id('identificacion'));
  private  inputNombre = element(by.id('nombre'));
  private  inputEspecialidad = element(by.xpath('//*[@id="especialidad"]'));
  private  inputValorEspecialida =   element(by.xpath('//*[@id="cdk-overlay-0"]/nz-option-container/div/cdk-virtual-scroll-viewport/div[1]/nz-option-item[1]'));

  async clickBotonCrearEspecialista() {
    await this.crearEspecialista.click();
  }
  async ingresarIdentificacion(identificacion){
    await this.inputIdentificacion.sendKeys(identificacion);
  }
  async ingresarNombre(nombre){
    await this.inputNombre.sendKeys(nombre);
  }
  async ingresartEspecialidad(){
    await this.inputEspecialidad.click();
  }
  async ingresarValorEspecialida(){
    await this.inputValorEspecialida.click();
  }
}
