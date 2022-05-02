import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../services/form.service';
import { CreditCard } from '../../../../interfaces/banca.interface';
import {
  AccountBack,
  CreditCardBack,
  LoanBack,
} from '../../../../interfaces/form.interface';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit, OnChanges {
  @Input() idUser!: number;
  @Input() doc!: string;

  //formulario reactivo para la creacion de productos
  productForm: FormGroup = this.fb.group({
    idcustomer: [this.idUser],
    product: ['creditCard'], // creditCard, Loan, account
    currency: ['PEN'], // USD, PEN
    OpeningDate: [new Date()],

    // Si es cuenta
    accountType: [this.doc?.length === 11 ? 'current' : 'savings'], // savings, current and fixed
    dniRucOwner: [''],
    owner: ['owner'], // owner or signatory

    // si es prestamo
    CapitalAmount: [''],
    dues: ['12'], // numero de cuotas
  });

  constructor(private fb: FormBuilder, private formService: FormService) {}

  // para estar atento a los cambios en los padres del componente
  ngOnChanges(changes: SimpleChanges): void {
    this.productForm.reset({
      idcustomer: this.idUser,
      product: 'creditCard',
      currency: 'PEN',
      accountType: this.doc.length === 11 ? 'current' : 'savings',
      owner: 'owner',
      dues: '12',
      OpeningDate: new Date(),
    });
  }

  ngOnInit(): void {
    this.productForm.reset({
      idcustomer: this.idUser,
      product: 'creditCard',
      currency: 'PEN',
      accountType: this.doc.length === 11 ? 'current' : 'savings',
      owner: 'owner',
      dues: '12',
      OpeningDate: new Date(),
    });
  }

  //funcion para la deteccion de errores en el html
  // attIsValid( att: string) {
  //   return this.productForm.controls[att].errors
  //       && this.productForm.controls[att].touched;
  // }

  //funcion submit
  save() {
    // verificamos que el formulario sea valido
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    //verificamos que tipo de producto es para hacer la opearcion post con sus respectivos atributos.
    if (this.productForm.value.product === 'creditCard') {
      const creditCard: CreditCardBack = {
        idcustomer: this.idUser,
        idproduct: 6,
        currency: this.productForm.value.currency,
      };

      this.formService.addProduct(creditCard, 'card-credits').subscribe();
    } else if (this.productForm.value.product === 'account') {
      const account: AccountBack = {
        idcustomer: this.idUser,
        idproduct:
          this.productForm.value.accountType == 'savings'
            ? 1
            : this.productForm.value.accountType == 'current'
            ? 2
            : 3,
        currency: this.productForm.value.currency,
        accounttype: this.productForm.value.accountType,
      };

      this.formService.addProduct(account, 'accounts').subscribe();
    } else if (this.productForm.value.product === 'loan') {
      const loan: LoanBack = {
        idcustomer: this.idUser,
        idproduct: this.doc.length === 8 ? 4 : 5,
        currency: this.productForm.value.currency,
        amountborrowed: this.productForm.value.CapitalAmount,
        quotas: this.productForm.value.dues,
      };

      this.formService.addProduct(loan, 'credits').subscribe();
    }

    //cunaod se hace todo el submit con exito , volvemos a los valores por defecto
    this.productForm.reset({
      idcustomer: this.idUser,
      product: 'creditCard',
      currency: 'PEN',
      accountType: this.doc.length === 11 ? 'current' : 'savings',
      owner: 'owner',
      dues: '12',
      OpeningDate: new Date(),
    });
  }
}
