import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  // la variable formOpen es la que contiene el form a abrir, por defecto el accountForm
  @Input() formOpen: string = 'accountForm';

  @Input() idProduct!: number;
  // variables de accountForm
  @Input() numberAccount!: string;
  @Input() operationType!: string;
  @Input() id_user!: number; // id del usuario que realizara la operacion

  // variables de createProductForm and credicardForm and creditpaymentform
  @Input() doc!: string;

  // variables de creditCardForm
  @Input() creditCardNumber!: string;
  @Input() loanNumber!: string;

  constructor() {}

  ngOnInit(): void {}
}
