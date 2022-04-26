import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cci'
})
export class CciPipe implements PipeTransform {

  transform(valor:string): string {
    let str = valor.slice(0,3);
    let str1 = valor.slice(3,6);
    let str2 = valor.slice(6,18);
    return str+"-"+str1+"-"+str2;
  }

}
