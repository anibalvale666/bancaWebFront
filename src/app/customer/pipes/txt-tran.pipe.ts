import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'txtTran'
})
export class TxtTranPipe implements PipeTransform {

  transform(ope:string, dues:string, type:string): any {
    if (type==="C") {
      if (ope==="1") {
        return "Hizo un Depósito";
      }else{
        return "Hizo un Retiro";
      }
    }else if(type==="P"){
      if (ope==="1") {
        return "Pago cuota "+dues;
      }
    }else if(type==="T"){
      if (ope==="1") {
        return "Hizo un Consumo";
      }else{
        return "Pago Consumo";
      }
    }

    
  }

}
