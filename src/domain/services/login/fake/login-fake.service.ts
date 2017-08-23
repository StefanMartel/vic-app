import {ILoginService} from '../i-login.service';
import {IPlayerHttp} from '../../../../infrastructure/http/user/i-player-http';
import {Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';


export class LoginFakeService implements ILoginService {

    constructor(@Inject('LoginService') public PlayerRepository: IPlayerHttp) {}

    validLogin(login: string, password: string): Observable<boolean> {
        return this.PlayerRepository.logPlayer(login, password)
            .map(data => {
                return data;
            });
    }

}
