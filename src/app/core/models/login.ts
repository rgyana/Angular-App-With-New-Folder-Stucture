import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class LoginClass {
    loginController: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.loginController = formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
            rememberme: ['']
        })
    }
}

export interface LoginModel {
    username: string;
    password: string;
}