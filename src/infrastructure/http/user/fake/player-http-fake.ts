import {IPlayerHttp} from '../i-player-http';
import {Observable} from 'rxjs/Observable';
import {Player} from '../../../../domain/models/player.model';

export class PlayerHttpFake implements IPlayerHttp{


    logPlayer(login: string, password: string): Observable<boolean> {
        return Observable.create((observer) => {
            setTimeout(() => {
                observer.next( (login === 'demo' && password === '1234') ? true : false);
            }, 5000);
        })
    }


    getPlayer(login: string): Observable<Player> {
        return Observable.create((observer) => {
            setTimeout(() => {
                let player = new Player(login, 'mail@test.fr');
                observer.next( player ? player : null);
            }, 5000);
        })
    }

}