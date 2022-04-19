import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-operations',
  templateUrl: './account-operations.component.html',
  styleUrls: ['./account-operations.component.css']
})
export class AccountOperationsComponent implements OnInit {

  accountForm: FormGroup = this.fb.group({
    accountNumber: [''],
    amount: [''],
    operationType: ['deposit'],  
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido( campo: string) {
    return this.accountForm.controls[campo].errors 
        && this.accountForm.controls[campo].touched;
  }
  
  guardar() {

    // if(this.miFormulario.invalid) {
    //   this.miFormulario.markAllAsTouched();
    //   return;
    // }
  
    // console.log(this.miFormulario.value);
    // this.miFormulario.reset();
    console.log(this.accountForm.value);
  }

}
