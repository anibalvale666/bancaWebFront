import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../services/form.service';
import { TransactionBack } from '../../../../interfaces/form.interface';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../../../services/detail.service';

@Component({
  selector: 'app-account-operations',
  templateUrl: './account-operations.component.html',
  styleUrls: ['./account-operations.component.css'],
})
export class AccountOperationsComponent implements OnInit, OnChanges {
  // accountForm
  @Input() numberAccount!: string;
  @Input() operationType!: string;
  @Input() idUser!: number;
  @Input() idProduct!: number;

  accountForm: FormGroup = this.fb.group({
    idcustomer: [this.idUser],
    accountNumber: ['', Validators.required],
    operationType: ['deposit', Validators.required],
    amount: ['', [Validators.required, Validators.min(1)]],
    date: [new Date()],
    type: ['account'],
  });

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private detailService: DetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  product_cuenta: any;
  // para estar atento a los cambios en los padres del componente
  ngOnChanges(changes: SimpleChanges): void {
    this.accountForm.reset({
      idcustomer: this.idUser,
      accountNumber: this.numberAccount,
      operationType: this.operationType,
      date: new Date(),
      type: 'account',
    });
  }

  ngOnInit(): void {
    this.detailService
      .getAccountDetail(this.activatedRoute.snapshot.params['id'])
      .subscribe((data: any) => {
        this.product_cuenta = data;
      });
    this.accountForm.reset({
      idcustomer: this.idUser,
      accountNumber: this.numberAccount,
      operationType: this.operationType,
      date: new Date(),
      type: 'account',
    });
  }

  //funcion para la deteccion de errores en el html
  attIsValid(att: string) {
    return (
      this.accountForm.controls[att].errors &&
      this.accountForm.controls[att].touched
    );
  }

  //funcion submit, solo envia si el form es valido
  save() {
    if (this.accountForm.invalid) {
      this.accountForm.markAllAsTouched();
      return;
    }

    const accountOperation: TransactionBack = {
      idcustomer: this.idUser,
      idaccount: this.idProduct,
      operation: this.accountForm.value.operationType,
      amount: this.accountForm.value.amount,
    };

    let newBalance;

    let resp = true;
    if (this.accountForm.value.operationType === 'withdrawal') {
      if (this.product_cuenta.balance <= this.accountForm.value.amount) {
        resp = false;
      } else {
        resp = true;
        newBalance =
          this.product_cuenta.balance - this.accountForm.value.amount;
      }
    } else {
      newBalance = this.product_cuenta.balance + this.accountForm.value.amount;
    }

    if (resp) {
      this.detailService
        .putAmount(this.idProduct, { balance: newBalance }, 'accounts')
        .subscribe();
      this.formService.addTransaction(accountOperation).subscribe();
    } else {
      alert('No hay suficiente saldo en la cuenta');
    }

    this.accountForm.reset({
      idcustomer: this.idUser,
      accountNumber: this.numberAccount,
      operationType: this.operationType,
      date: new Date(),
      type: 'account',
    });
  }
}
