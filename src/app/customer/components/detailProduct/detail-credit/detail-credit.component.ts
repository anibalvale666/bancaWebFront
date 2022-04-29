import { Component, Input, OnInit } from '@angular/core';
import { CreditApi } from 'src/app/interfaces/banca-api.interface';

@Component({
  selector: 'app-detail-credit',
  templateUrl: './detail-credit.component.html',
  styleUrls: ['./detail-credit.component.css']
})
export class DetailCreditComponent implements OnInit {

  @Input() creditApi!: CreditApi;
  constructor() { }

  ngOnInit(): void {
  }

}
