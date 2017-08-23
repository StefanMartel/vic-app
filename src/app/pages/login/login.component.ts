import {Component, Input} from '@angular/core';

@Component({
    selector: 'vic-login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {

        @Input() title;
}
