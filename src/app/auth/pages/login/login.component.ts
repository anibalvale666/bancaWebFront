import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  loginForm: FormGroup = this.fb.group({
    dniRuc:  [ '' , Validators.required],
    password:  [ '' , Validators.required],  
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,        
    ) { }

  ngOnInit(): void {
  }

  //funcion para la deteccion de errores en el html
  attIsValid( att: string) {
    return this.loginForm.controls[att].errors 
        && this.loginForm.controls[att].touched;
  }
  
  //funcion submit, solo envia si el form es valido
  login() {

    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        console.log(data);
        if(data) {
          if(data.type=='admin'){
            this.router.navigate(['/customer']);
          }else {
            this.router.navigate(['/customer/detailcustomer/', data.id]);
          }
  
        }
      }
    );
    this.loginForm.reset({});
  }

}
