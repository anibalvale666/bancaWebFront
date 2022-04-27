import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  // la variable formOpen es la que contiene el form a abrir, por defecto el accountForm
  @Input() formOpen: string = 'accountForm';
  
  
  // variables de accountForm
  @Input() numberAccount!: number;
  @Input() operationType!: string;
  @Input() id_user!: number; // id del usuario que realizara la operacion

  // variables de createProductForm and credicardForm and creditpaymentform
  @Input() dniRuc!: number;
  
  // variables de creditCardForm
  @Input() creditCardNumber!: number;


  constructor() { }


  ngOnInit(): void {
  }

}
