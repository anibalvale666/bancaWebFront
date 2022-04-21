import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-payments',
  templateUrl: './credit-payments.component.html',
  styleUrls: ['./credit-payments.component.css']
})
export class CreditPaymentsComponent implements OnInit {

  creditForm: FormGroup = this.fb.group({
    creditNumber: [''],
    dniRuc: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    date: [new Date],
    operationType: ['payment'],  
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  attIsValid( att: string) {
    return this.creditForm.controls[att].errors 
        && this.creditForm.controls[att].touched;
  }
  
  save() {

    if(this.creditForm.invalid) {
      this.creditForm.markAllAsTouched();
      return;
    }
  
    // console.log(this.miFormulario.value);
    console.log(this.creditForm.value);
    this.creditForm.reset({
      operationType: 'payment',
    });
  }
}
