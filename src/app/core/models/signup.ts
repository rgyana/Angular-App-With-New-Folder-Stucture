import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class SignupClass {
    signupControllers: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.signupControllers = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            mobile: [''],
            userType: ['']
        })
    }
}

export interface Signup {
    username: string;
    mobile: string;
    email: string;
    password: string;
    userType: string;
}