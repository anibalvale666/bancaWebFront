import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../../../services/form.service';
import { loanTransaction } from '../../../../interfaces/form.interface';

@Component({
  selector: 'app-credit-payments',
  templateUrl: './credit-payments.component.html',
  styleUrls: ['./credit-payments.component.css']
})
export class CreditPaymentsComponent implements OnInit, OnChanges {

  @Input() dniRuc!: number;
  @Input() operationType!: string;

  creditForm: FormGroup = this.fb.group({
    creditNumber: ['1312'],
    dniRuc: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    date: [new Date],
    operationType: ['deposit'],  // deposit is a payment of credit
    type: ['credit'],
  });

  constructor( private fb: FormBuilder,
               private formService: FormService              
  ) { }

  // para estar atento a los cambios en los padres del componente
  ngOnChanges(changes: SimpleChanges): void {
    this.creditForm.reset({
      creditNumber: '1312',
      dniRuc: this.dniRuc,
      operationType: this.operationType,
      date: new Date,
      type: 'credit',
    })

  }

  
  ngOnInit(): void {
    this.creditForm.reset({
      creditNumber: '1312',
      dniRuc: this.dniRuc,
      operationType: this.operationType,
      date: new Date,
      type: 'credit',
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
  
    this.formService.addLoanTransaction(this.creditForm.value).subscribe();
    
    console.log(this.creditForm.value);
    this.creditForm.reset({
      creditNumber: '1312',
      dniRuc: this.dniRuc,
      operationType: this.operationType,
      date: new Date,
      type: 'credit',
    });
  }
}
