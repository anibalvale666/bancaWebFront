import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-credit-payments',
  templateUrl: './credit-payments.component.html',
  styleUrls: ['./credit-payments.component.css']
})
export class CreditPaymentsComponent implements OnInit {

  creditForm: FormGroup = this.fb.group({
    creditNumber: [''],
    dni: [''],
    amount: [''],
    operationType: ['payment'],  
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido( campo: string) {
    return this.creditForm.controls[campo].errors 
        && this.creditForm.controls[campo].touched;
  }
  
  guardar() {

    // if(this.miFormulario.invalid) {
    //   this.miFormulario.markAllAsTouched();
    //   return;
    // }
  
    // console.log(this.miFormulario.value);
    // this.miFormulario.reset();
    console.log(this.creditForm.value);
  }
}
