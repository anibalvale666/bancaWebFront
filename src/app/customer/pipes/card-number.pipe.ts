import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {

  transform(account: any): string {
    
    let str1 = account.numberAccount.slice(0,4);
    let str2 = account.numberAccount.slice(4,8);
    let str3 = account.numberAccount.slice(8,18);
    return str1+"-"+str2+"-"+str3;
  }

}
