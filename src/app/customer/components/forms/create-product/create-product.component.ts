import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnChanges {

  @Input() dniRuc!: number;

  productForm: FormGroup = this.fb.group({
    dniRuc: ['',Validators.required],
    product: ['creditCard'], // creditCard, Loan, account
    currency: ['PEN'], // USD, PEN
    OpeningDate: [new Date],

    // Si es cuenta
    accountType: ['savings'],  // savings, current and fixed
    dniRucOwner: [''],
    owner: ['owner'], // owner or signatory

    // si es prestamo
    CapitalAmount: [''], 
    dues: ['12'], // numero de cuotas
  });

  constructor( private fb: FormBuilder,
               private formService: FormService  
  ) { }

  // para estar atento a los cambios en los padres del componente
  ngOnChanges(changes: SimpleChanges): void {
    this.productForm.reset({
      dniRuc: this.dniRuc,
      product: 'creditCard',
      currency: 'PEN',
      accountType: 'savings',
      owner: 'owner',
      dues: '12',
      OpeningDate: new Date,
    })
  }

  ngOnInit(): void {
    this.productForm.reset({
      dniRuc: this.dniRuc,
      product: 'creditCard',
      currency: 'PEN',
      accountType: 'savings',
      owner: 'owner',
      dues: '12',
      OpeningDate: new Date,
    })
  }

  

  

  //funcion para la deteccion de errores en el html
  // attIsValid( att: string) {
  //   return this.productForm.controls[att].errors 
  //       && this.productForm.controls[att].touched;
  // }

  //funcion submit, solo envia si el form es valido
  save() {

    if(this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    console.log(this.productForm.value);

    this.formService.addProduct(this.productForm.value).subscribe();
  
    this.productForm.reset({
      product: 'creditCard',
      currency: 'PEN',
      accountType: 'savings',
      owner: 'owner',
      dues: '12',
      OpeningDate: new Date,
    });
  }


}
