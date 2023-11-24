import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors  } from '@angular/forms';
import { Router } from '@angular/router';

function customUserValidator(control: AbstractControl): ValidationErrors | null {
  const validUser = 'ursula.obispo';
  return control.value === validUser ? null : { custom: true };
}
function customPasswordValidator(controlpass: AbstractControl): ValidationErrors | null {
  const passwordPattern = '202210211';
  return controlpass.value=== passwordPattern ? null : { customPassword: true };
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  hide = true;
  formLogin: FormGroup = new FormGroup({});


  constructor(private router:Router){}

  ngOnInit(): void {
    this.initFormGroup();
  }

  public initFormGroup(){
    this.formLogin = new FormGroup({
      user: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        customUserValidator
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        customPasswordValidator
      ])
    })
  }

  public sendUser() {
    const { value } = this.formLogin;
    console.log(value);

    // Validaciones adicionales según tus necesidades
    if (this.formLogin.valid) {
      if (value.user === 'ursula.obispo' && value.password === '202210211') {
        this.router.navigate(['/modules']);
      } else {
        this.formLogin.get('user')?.setErrors({ custom: true });
        this.formLogin.get('password')?.setErrors({ customPassword: true });
        console.error('El usuario no existe o la contraseña es incorrecta.');
      }
    }
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }


}
