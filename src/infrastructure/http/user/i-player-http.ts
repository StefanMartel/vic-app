import {Observable} from 'rxjs/Observable';
import {Player} from '../../../domain/models/player.model';

export interface IPlayerHttp {
    logPlayer(login: string, password: string): Observable<boolean>;
    getPlayer(login: string): Observable<Player>;
}
