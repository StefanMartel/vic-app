import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILoginService} from "../../../domain/services/login/i-login.service";


@Component({
    selector: 'vic-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit{

    loginForm: FormGroup;
    login: AbstractControl;
    password: AbstractControl;

    loginInProgress: string;

    constructor(private formBuilder: FormBuilder,
                @Inject('LoginService') private loginServ: ILoginService) {
    }

    ngOnInit() {
        this.buildAuthenticationForm();
        this.loginInProgress = 'initial';
    }

    private buildAuthenticationForm() {
        this.loginForm = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.login = this.loginForm.controls['login'];
        this.password = this.loginForm.controls['password'];
    }

    onSubmit(): void {
        this.loginInProgress = 'pending';
        if (this.loginForm.valid) {
            this.loginServ.validLogin(this.login.value, this.password.value).subscribe( data => {
                console.log(data);
                data ? this.loginInProgress = 'success' : this.loginInProgress = 'error';
            })
        }
    }

}