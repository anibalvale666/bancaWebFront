import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-payments',
  templateUrl: './credit-payments.component.html',
  styleUrls: ['./credit-payments.component.css']
})
export class CreditPaymentsComponent implements OnInit, OnChanges {

  @Input() dniRuc!: number;
  @Input() operationType!: string;

  creditForm: FormGroup = this.fb.group({
    creditNumber: [''],
    dniRuc: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    date: [new Date],
    operationType: ['deposit'],  // deposit is a payment of credit
  });

  constructor( private fb: FormBuilder) { }

  // para estar atento a los cambios en los padres del componente
  ngOnChanges(changes: SimpleChanges): void {
    this.creditForm.reset({
      dniRuc: this.dniRuc,
      operationType: this.operationType,
      
    })

  }

  
  ngOnInit(): void {
    this.creditForm.reset({
      dniRuc: this.dniRuc,
      operationType: this.operationType,
      
    })
  }

  //funcion para la deteccion de errores en el html
  attIsValid( att: string) {
    return this.creditForm.controls[att].errors 
        && this.creditForm.controls[att].touched;
  }
  
  //funcion submit, solo envia si el form es valido
  save() {

    if(this.creditForm.invalid) {
      this.creditForm.markAllAsTouched();
      return;
    }
  
    // console.log(this.miFormulario.value);
    console.log(this.creditForm.value);
    this.creditForm.reset({
      operationType: 'deposit',
    });
  }
}
