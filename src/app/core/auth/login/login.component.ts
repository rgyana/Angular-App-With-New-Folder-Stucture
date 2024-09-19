import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginClass } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  isLoading: boolean = false;
  NewLoginFormGroup !: LoginClass;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.NewLoginFormGroup = new LoginClass(this.formBuilder);
  }

  username = 7683876626;
  password = 123456;
  loginHere() {
    if (
      this.NewLoginFormGroup.loginForm.value.username == this.username
      &&
      this.NewLoginFormGroup.loginForm.value.password == this.password
    ) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Logged In Successfully',
        life: 3000
      })

      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 3000);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Login Error',
        detail: 'Invalid username & password',
        life: 3000
      })
    }
  }

}
