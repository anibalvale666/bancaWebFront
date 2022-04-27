import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-operations',
  templateUrl: './account-operations.component.html',
  styleUrls: ['./account-operations.component.css']
})
export class AccountOperationsComponent implements OnInit, OnChanges {

  
  // accountForm
  @Input() numberAccount!: number;
  @Input() operationType!: string;
  @Input() id!: number;
  
  
  accountForm: FormGroup = this.fb.group({
    id_customer: [this.id],
    accountNumber:  [ '' , Validators.required],
    operationType:  [ 'deposit' , Validators.required],  
    amount:         [ '' , [Validators.required, Validators.min(1)]],
    date: [new Date()],
    type: ['account']
  });

  constructor( private fb: FormBuilder) { }
  // para estar atento a los cambios en los padres del componente
  ngOnChanges(changes: SimpleChanges): void {
    this.accountForm.reset({
      id_customer: this.id,
      accountNumber: this.numberAccount,
      operationType: this.operationType,
      date: new Date(),
      type: 'account'
    })
  }

  ngOnInit(): void {
    this.accountForm.reset({
      id_customer: this.id,
      accountNumber: this.numberAccount,
      operationType: this.operationType,
      date: new Date(),
      type: 'account'
    })
  }

  //funcion para la deteccion de errores en el html
  attIsValid( att: string) {
    return this.accountForm.controls[att].errors 
        && this.accountForm.controls[att].touched;
  }
  
  //funcion submit, solo envia si el form es valido
  save() {

    if(this.accountForm.invalid) {
      this.accountForm.markAllAsTouched();
      return;
    }
    console.log(this.accountForm.value);
    this.accountForm.reset({
      operationType: 'deposit',
    });
  
  }

}
