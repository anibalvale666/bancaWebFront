import { Component, Input, OnInit } from '@angular/core';
import { DetailAccountCredit } from 'src/app/interfaces/customer.interface';

@Component({
  selector: 'app-detail-credit',
  templateUrl: './detail-credit.component.html',
  styleUrls: ['./detail-credit.component.css']
})
export class DetailCreditComponent implements OnInit {

  @Input() detailaccountcredit!: DetailAccountCredit;
  constructor() { }

  ngOnInit(): void {
  }

}
