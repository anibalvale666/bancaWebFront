import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup = this.fb.group({
    dniRuc: ['',Validators.required],
    product: ['account'], // creditCard, Loan, account
    currency: ['PEN'], // USD, PEN
    OpeningDate: [new Date],

    // Si es cuenta
    accountType: ['savings'],  // savings, current and fixed
    dniRucOwner: [''],
    owner: ['owner'], // owner or signatory

    // si es prestamo
    CapitalAmount: [''], 
    dues: [''], // numero de cuotas
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  attIsValid( att: string) {
    return this.productForm.controls[att].errors 
        && this.productForm.controls[att].touched;
  }
  
  save() {

    if(this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    console.log(this.productForm.value);
  
    this.productForm.reset({
      product: 'account',
      currency: 'PEN',
      accountType: 'savings',
      owner: 'owner',
    });
  }

}
