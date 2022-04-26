import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencys'
})
export class CurrencysPipe implements PipeTransform {

  transform(amount: number): number {
    return amount;
  }

}
