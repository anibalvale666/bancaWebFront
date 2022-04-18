import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credit-card-consumption',
  templateUrl: './credit-card-consumption.component.html',
  styleUrls: ['./credit-card-consumption.component.css']
})
export class CreditCardConsumptionComponent implements OnInit {

  creditCardForm: FormGroup = this.fb.group({
    creditCardNumber: [''],
    dni: [''],
    amount: [''],
    operationType: ['payment'], // payment, withdrawal
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido( campo: string) {
    return this.creditCardForm.controls[campo].errors 
        && this.creditCardForm.controls[campo].touched;
  }
  
  guardar() {

    // if(this.miFormulario.invalid) {
    //   this.miFormulario.markAllAsTouched();
    //   return;
    // }
  
    // console.log(this.miFormulario.value);
    // this.miFormulario.reset();
    console.log(this.creditCardForm.value);
  }
}
