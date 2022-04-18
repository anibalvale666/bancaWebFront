import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-customer',
  templateUrl: './table-customer.component.html',
  styleUrls: ['./table-customer.component.css']
})
export class TableCustomerComponent implements OnInit {

  @Input() label: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
