import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-card-consumption',
  templateUrl: './credit-card-consumption.component.html',
  styleUrls: ['./credit-card-consumption.component.css']
})
export class CreditCardConsumptionComponent implements OnInit, OnChanges {

  @Input() creditCardNumber!: number;
  @Input() dniRuc!: number;
  @Input() operationType!: string;

  creditCardForm: FormGroup = this.fb.group({
    creditCardNumber: ['', Validators.required],
    dniRuc: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    cvc: ['', [Validators.required, Validators.maxLength(3)]],  
    expirationDate: ['', Validators.required],
    amount: ['',  [Validators.required, Validators.min(1)]],
    operationType: ['deposit', Validators.required], // deposit = payment of credit card, withdrawal = consumption of creditCard
    date: [new Date],
    type: ['creditCard'],
  });

  constructor( private fb: FormBuilder) { }
  // para estar atento a los cambios en los padres del componente
  ngOnChanges(changes: SimpleChanges): void {
    this.creditCardForm.reset({
      creditCardNumber: this.creditCardNumber,
      dniRuc: this.dniRuc,
      operationType: this.operationType,
      date: new Date,
      type: 'creditCard',
  
    })
  }

  ngOnInit(): void {
    this.creditCardForm.reset({
      creditCardNumber: this.creditCardNumber,
      dniRuc: this.dniRuc,
      operationType: this.operationType,
      date: new Date,
      type: 'creditCard',
    })
  }

  //funcion para la deteccion de errores en el html
  attIsValid( att: string) {
    return this.creditCardForm.controls[att].errors 
        && this.creditCardForm.controls[att].touched;
  }
  
  //funcion submit, solo envia si el form es valido
  save() {
    console.log(this.creditCardForm.value);
    if(this.creditCardForm.invalid) {
      this.creditCardForm.markAllAsTouched();
      return;
    }
    
    // console.log(this.creditCardForm.value);
    this.creditCardForm.reset({
      operationType: 'deposit'
    });
  }
}
