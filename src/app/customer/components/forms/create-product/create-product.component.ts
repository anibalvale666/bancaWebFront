import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup = this.fb.group({
    name: [''],
    lastName: [''],
    dni: [''],
    accountType: ['savings'],  // savings, current anmd fixed
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido( campo: string) {
    return this.productForm.controls[campo].errors 
        && this.productForm.controls[campo].touched;
  }
  
  guardar() {

    // if(this.miFormulario.invalid) {
    //   this.miFormulario.markAllAsTouched();
    //   return;
    // }
  
    // console.log(this.miFormulario.value);
    // this.miFormulario.reset();
    console.log(this.productForm.value);
  }

}
