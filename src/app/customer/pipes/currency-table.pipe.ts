import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencytable'
})

// recibimos un numero lo devolvemos como string con su formato de moneda y con maximo dos decimales
export class CurrencyTablePipe implements PipeTransform {

  transform(amount: number, valor: string ="PEN"  ): string {
    
    return  (valor ==="PEN") ? "S/" + amount.toFixed(2): "$" + amount.toFixed(2); 
  }

}
