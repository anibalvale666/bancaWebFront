import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencytable'
})
export class CurrencyTablePipe implements PipeTransform {

  transform(valor: string  ): string {
    
    return  (valor ==="S") ? "S/": "$"; 
  }

}
