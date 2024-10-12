import { Component } from '@angular/core';
import { OtpVerifyClass } from '../../models/otp';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.scss'
})
export class VerifyOtpComponent {
  otpForm!: OtpVerifyClass;
  isLoading: boolean = false;
  username: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.otpForm = new OtpVerifyClass(this.formBuilder);
  }

  verifyOtp() { }

}
