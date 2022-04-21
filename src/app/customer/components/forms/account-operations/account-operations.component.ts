import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-operations',
  templateUrl: './account-operations.component.html',
  styleUrls: ['./account-operations.component.css']
})
export class AccountOperationsComponent implements OnInit {

  accountForm: FormGroup = this.fb.group({
    accountNumber: ['', Validators.required],
    amount: [ '' , [Validators.required, Validators.min(1)]],  
    operationType: ['deposit', Validators.required],  
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  attIsValid( att: string) {
    return this.accountForm.controls[att].errors 
        && this.accountForm.controls[att].touched;
  }
  
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
