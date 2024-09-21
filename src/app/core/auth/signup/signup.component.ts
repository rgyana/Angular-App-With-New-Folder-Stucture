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
  signupForm!: SignupClass;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.signupForm = new SignupClass(this.formBuilder);
  }

  signupHere() {
    this.isLoading = true;
    this.router.navigate(['/otp']);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Signed Up Successfully',
      life: 3000
    })
  }
}
