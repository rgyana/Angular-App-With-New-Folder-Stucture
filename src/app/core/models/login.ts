import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class LoginClass {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        // this.loginForm = new FormGroup({
        //     username: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        //     password: new FormControl('', [Validators.required]),
        //     rememberme: new FormControl(''),
        // });

        this.loginForm = formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            password: ['', [Validators.required]],
            rememberme: ['']
        })
    }
}

export interface LoginModel {
    username: string;
    password: string;
}