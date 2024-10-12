import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class OtpVerifyClass {
    otpControllers: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.otpControllers = formBuilder.group({
            username: [''],
            otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
        })
    }
}

export interface OtpVerifyModel {
    username: string;
    otp: string;
}