import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../services/form.service';
import { TransactionBack } from '../../../../interfaces/form.interface';

@Component({
  selector: 'app-account-operations',
  templateUrl: './account-operations.component.html',
  styleUrls: ['./account-operations.component.css']
})
export class AccountOperationsComponent implements OnInit, OnChanges {

  
  // accountForm
  @Input() numberAccount!: string;
  @Input() operationType!: string;
  @Input() idUser!: number;
  @Input() idProduct!: number;
  

  accountForm: FormGroup = this.fb.group({
    idcustomer: [this.idUser],
    accountNumber:  [ '' , Validators.required],
    operationType:  [ 'deposit' , Validators.required],  
    amount:         [ '' , [Validators.required, Validators.min(1)]],
    date: [new Date()],
    type: ['account']
  });

  constructor( private fb: FormBuilder,
               private formService: FormService  
  ) { }
  // para estar atento a los cambios en los padres del componente
  ngOnChanges(changes: SimpleChanges): void {
    
    this.accountForm.reset({
      idcustomer: this.idUser,
      accountNumber: this.numberAccount,
      operationType: this.operationType,
      date: new Date(),
      type: 'account'
    })
  }

  ngOnInit(): void {
    this.accountForm.reset({
      idcustomer: this.idUser,
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

    const accountOperation: TransactionBack ={
      idcustomer: this.idUser,
      idaccount : this.idProduct,
      operation: this.accountForm.value.operationType,
      amount: this.accountForm.value.amount,
    }

    this.formService.addTransaction(accountOperation).subscribe();

    this.accountForm.reset({
      idcustomer: this.idUser,
      accountNumber: this.numberAccount,
      operationType: this.operationType,
      date: new Date(),
      type: 'account'
    });
  
  }

}
