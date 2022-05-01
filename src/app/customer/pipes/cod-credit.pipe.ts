import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'codCredit'
})
export class CodCreditPipe implements PipeTransform {

  transform(credit: any): string {

    let valor:string ="";
    if (credit.codCredit!==null) {
      let str1 = credit.codCredit.slice(0,4);
      let str2 = credit.codCredit.slice(4,10);
      valor = str1+"-"+str2;
    }else{
      let str1 = credit.numberCardCredit.slice(0,4);
      let str2 = credit.numberCardCredit.slice(4,8);
      let str3 = credit.numberCardCredit.slice(8,12);
      let str4 = credit.numberCardCredit.slice(12,16);
      valor = str1+"-"+str2+"-"+str3+"-"+str4;
    }
    return valor;
    
  }

}
