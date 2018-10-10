import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login.component';
import {BoardFakeService} from '../../../domain/services/board/fake/board-fake.service';
import {BoardFakeModule} from '../../components/board-fake/board-fake.module';
import {LoginFormModule} from '../../components/login-form/login-form.module';
import {TitleComponent} from '../../components/title/title.component';
import {CaseFakeService} from '../../../domain/services/case/fake/case-fake.service';
import {LoginFakeService} from '../../../domain/services/login/fake/login-fake.service';
import {PlayerHttpFake} from '../../../infrastructure/http/user/fake/player-http-fake';


export function boardServicefactory(CaseFakeService: CaseFakeService) {
    return new BoardFakeService(CaseFakeService);
}

export function PlayerHttpfactory(PlayerHttpFake: PlayerHttpFake) {
    return new LoginFakeService(PlayerHttpFake);
}

@NgModule({
    imports: [
        CommonModule,
        BoardFakeModule,
        LoginFormModule
    ],
    declarations: [LoginComponent, TitleComponent],
    exports: [LoginComponent, TitleComponent],
    providers: [
        { provide: 'CaseService', useClass: CaseFakeService},
        { provide: 'BoardService',
          useFactory: boardServicefactory,
          deps : ['CaseService']
        },
        { provide: 'PlayerHttpFake', useClass: PlayerHttpFake},
        { provide: 'LoginService',
            useFactory: PlayerHttpfactory,
            deps : ['PlayerHttpFake']
        },
    ]
})

export class LoginModule { }
