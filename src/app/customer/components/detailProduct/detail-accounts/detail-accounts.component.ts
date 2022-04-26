import { Component, Input, OnInit } from '@angular/core';
import { DetailAccountCredit } from 'src/app/interfaces/customer.interface';

@Component({
  selector: 'app-detail-accounts',
  templateUrl: './detail-accounts.component.html',
  styleUrls: ['./detail-accounts.component.css']
})
export class DetailAccountsComponent implements OnInit {

  @Input() detailaccountcredit!: DetailAccountCredit;
  constructor() { }
  
  ngOnInit(): void {
  }

}
