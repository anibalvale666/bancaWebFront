import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../../interfaces/banca.interface';

// El pipe recibe un objeto en este caso las transacciones lo ordena por fecha
// el parametro orderPor es el campo por el que se ordena
// el order es true para ascendente y false para descendente
@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  orderValue: number = 1;
  transform(
    transaction: Transaction[],
    orderBy: string = 'NAN',
    order: boolean = true
  ): Transaction[] {
    //verificamos si el array es null
    if (!transaction) {
      return [];
    }

    //establecemos el orden asc o desc segun el parametro order
    if (order) {
      this.orderValue = 1;
    } else {
      this.orderValue = -1;
    }

    // ordenamos segun el campo, si el valor es NAN devuelve el array original
    if (orderBy === 'NAN') {
      return transaction;
    } else {
      return transaction.sort((a, b) =>
        a[orderBy as keyof Transaction]! > b[orderBy as keyof Transaction]!
          ? this.orderValue
          : -this.orderValue
      );
    }
  }
}
