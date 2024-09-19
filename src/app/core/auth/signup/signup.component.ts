import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';
import { SignupClass } from '../../models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  signupFormGroup!: SignupClass;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.signupFormGroup = new SignupClass(this.formBuilder);
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberme: ['']
    })
  }

  signupHere() {
    this.isLoading = true;
    this.authService.signupHere(this.signupForm.value).then((response) => {
      this.isLoading = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Signnedup In Successfully',
        life: 3000
      })
    }).catch((err) => {
      this.isLoading = false;
      this.messageService.add({
        severity: 'error',
        summary: 'Signup Error',
        detail: 'Something went wrong',
        life: 3000
      })
    })
  }
}
