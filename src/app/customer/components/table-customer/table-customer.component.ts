import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/banca.interface';

@Component({
  selector: 'app-table-customer',
  templateUrl: './table-customer.component.html',
  styleUrls: ['./table-customer.component.css']
})
export class TableCustomerComponent implements OnInit {
  // Boleano para cambiar  la tabla a talba empresa o tabla clientes; si esta en true es cliente
  @Input() isPerson: string = 'personal';
  //lista de los clientes o empresas
  @Input() customers: Customer[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
