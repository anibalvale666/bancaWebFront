import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {

  transform(number: string): string {
    
    if(number.length===18){
      let str1 = number.slice(0,4);
      let str2 = number.slice(4,8);
      let str3 = number.slice(8,18);
      return str1+"-"+str2+"-"+str3;
    }else if(number.length===16){
      let str1 = number.slice(0,4);
      let str2 = number.slice(4,8);
      let str3 = number.slice(8,12);
      let str4 = number.slice(8,16);
      return str1+"-"+str2+"-"+str3+"-"+str4;
    }else if(number.length===10){
      let str1 = number.slice(0,4);
      let str2 = number.slice(4,10);
      return str1+"-"+str2
    }else{
      return "";
    }
   
  
   
  }

}
