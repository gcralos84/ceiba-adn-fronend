import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eliminarDuplicado'
})
export class EliminarDuplicadoPipe implements PipeTransform {


  transform(value: any): any {

    if ( value !== undefined ) {
      const actual = [];

      value.filter(item => {
          actual.push(item.especialista);
      });
      const actual2 = new Set(actual);
      const result = [...actual2];
      return result;
    }

  }
}
