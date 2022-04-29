import { Component, Input, OnInit } from '@angular/core';
import { CardCreditApi } from 'src/app/interfaces/banca-api.interface';

@Component({
  selector: 'app-detail-card-credit',
  templateUrl: './detail-card-credit.component.html',
  styleUrls: ['./detail-card-credit.component.css']
})
export class DetailCardCreditComponent implements OnInit {

  @Input() cardCreditApi!: CardCreditApi;
  constructor() { }

  ngOnInit(): void {
  }

}
