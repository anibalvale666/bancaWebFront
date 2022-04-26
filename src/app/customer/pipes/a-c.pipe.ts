import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aC'
})
export class ACPipe implements PipeTransform {

  transform(cod: string): string {
    if (cod.length < 10) {
      return "S/ " + cod;
    } else if (cod.length === 18) {
      return "*" + cod.slice(14, 18);
    } else if (cod.length === 16) {
      return "*" + cod.slice(12, 16);
    } else {
      return "";
    }


  }
  /*const formatterPeso = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 0
  });
  
  return formatterPeso.format(Number(cod));*/

}

