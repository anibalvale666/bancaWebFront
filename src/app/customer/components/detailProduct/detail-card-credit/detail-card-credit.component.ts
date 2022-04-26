import { Component, Input, OnInit } from '@angular/core';
import { DetailAccountCredit } from 'src/app/interfaces/customer.interface';

@Component({
  selector: 'app-detail-card-credit',
  templateUrl: './detail-card-credit.component.html',
  styleUrls: ['./detail-card-credit.component.css']
})
export class DetailCardCreditComponent implements OnInit {

  @Input() detailaccountcredit!: DetailAccountCredit;
  constructor() { }

  ngOnInit(): void {
  }

}
