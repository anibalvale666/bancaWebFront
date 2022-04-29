import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../../interfaces/customer.interface';


// El pipe recibe un objeto en este caso las transacciones lo ordena por fecha
// el parametro orderPor es el campo por el que se ordena
// el order es true para ascendente y false para descendente
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  orderValue: number = 1;
  transform(transaction: Transaction[], orderPor:string = 'NAN', order:boolean= true, ): Transaction[] {

      if( order ) {
          this.orderValue = 1;
      } else {
          this.orderValue = -1;
      }

      if(orderPor === 'NAN'){
          return transaction;
      } else {
          return transaction.sort((a, b) => (a[orderPor  as keyof Transaction]! > b[orderPor  as keyof Transaction]! ) ? this.orderValue : -this.orderValue);
      }
  }
 
}
