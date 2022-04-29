import { Component, Input, OnInit } from '@angular/core';
import { DetailAccountCredit } from 'src/app/interfaces/customer.interface';
import { AccountApi } from 'src/app/interfaces/banca-api.interface';

@Component({
  selector: 'app-detail-accounts',
  templateUrl: './detail-accounts.component.html',
  styleUrls: ['./detail-accounts.component.css']
})
export class DetailAccountsComponent implements OnInit {

  @Input() accountApi!: AccountApi;
  constructor() { }
  
  ngOnInit(): void {
  }

}
