import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../../../services/form.service';
import { TransactionBack } from '../../../../interfaces/form.interface';


@Component({
  selector: 'app-credit-payments',
  templateUrl: './credit-payments.component.html',
  styleUrls: ['./credit-payments.component.css'],
})
export class CreditPaymentsComponent implements OnInit, OnChanges {
  @Input() dniRuc!: string;
  @Input() operationType!: string;
  @Input() loanNumber!: string;
  @Input() idUser!: number;
  @Input() idProduct!: number;


  creditForm: FormGroup = this.fb.group({
    creditNumber: [this.loanNumber],
    dniRuc: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    date: [new Date()],
    operationType: ['deposit'], // deposit is a payment of credit
    type: ['credit'],
  });

  constructor(private fb: FormBuilder, private formService: FormService) {}

  // para estar atento a los cambios en los padres del componente
  ngOnChanges(changes: SimpleChanges): void {
    this.creditForm.reset({
      creditNumber: this.loanNumber,
      dniRuc: this.dniRuc,
      operationType: this.operationType,
      date: new Date(),
      type: 'credit',
    });
  }

  ngOnInit(): void {
    this.creditForm.reset({
      creditNumber: this.loanNumber,
      dniRuc: this.dniRuc,
      operationType: this.operationType,
      date: new Date(),
      type: 'credit',
    });
  }

  //funcion para la deteccion de errores en el html
  attIsValid(att: string) {
    return (
      this.creditForm.controls[att].errors &&
      this.creditForm.controls[att].touched
    );
  }

  //funcion submit, solo envia si el form es valido
  save() {
    if (this.creditForm.invalid) {
      this.creditForm.markAllAsTouched();
      return;
    }

    const creditOperation: TransactionBack ={
      idcustomer: this.idUser,
      idcredit : this.idProduct,
      operation: this.creditForm.value.operationType,
      amount: this.creditForm.value.amount,
    }

    this.formService.addTransaction(creditOperation).subscribe();

    this.creditForm.reset({
      creditNumber: this.loanNumber,
      dniRuc: this.dniRuc,
      operationType: this.operationType,
      date: new Date(),
      type: 'credit',
    });
  }
}
