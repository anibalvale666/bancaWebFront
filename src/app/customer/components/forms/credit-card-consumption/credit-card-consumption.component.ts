import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-card-consumption',
  templateUrl: './credit-card-consumption.component.html',
  styleUrls: ['./credit-card-consumption.component.css']
})
export class CreditCardConsumptionComponent implements OnInit {

  creditCardForm: FormGroup = this.fb.group({
    creditCardNumber: ['', Validators.required],
    dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    cvc: ['', [Validators.required, Validators.maxLength(3)]],  
    expirationDate: ['', Validators.required],
    amount: ['',  [Validators.required, Validators.min(1)]],
    operationType: ['payment', Validators.required], // payment, consumption
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  attIsValid( att: string) {
    return this.creditCardForm.controls[att].errors 
        && this.creditCardForm.controls[att].touched;
  }
  
  save() {

    if(this.creditCardForm.invalid) {
      this.creditCardForm.markAllAsTouched();
      return;
    }
    
    console.log(this.creditCardForm.value);
    // console.log(this.creditCardForm.value);
    this.creditCardForm.reset({
      operationType: 'payment'
    });
  }
}
