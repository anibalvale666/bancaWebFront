import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencytable'
})
export class CurrencyTablePipe implements PipeTransform {

  transform(account: any  ): string {
    
    return  (account.currency ==="S") ? "S/": "$"; 
  }

}
