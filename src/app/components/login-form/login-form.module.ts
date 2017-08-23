import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from 'ng2-translate';
import {InteractiveButtonModule} from '../buttons/interactive-button/interactive-button.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        InteractiveButtonModule
    ],
    declarations: [LoginFormComponent],
    exports: [LoginFormComponent]
})

export class LoginFormModule { }
