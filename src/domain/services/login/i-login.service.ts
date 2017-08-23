import {Observable} from 'rxjs/Observable';

export interface ILoginService{
    validLogin(login: string, password: string): Observable<boolean>;
}