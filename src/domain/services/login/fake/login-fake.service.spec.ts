import {async, inject, TestBed} from '@angular/core/testing';
import {LoginFakeService} from './login-fake.service';
import {PlayerHttpfactory} from '../../../../app/pages/login/login.module';
import {PlayerHttpFake} from '../../../../infrastructure/http/user/fake/player-http-fake';


describe('Login Service', () => {
    beforeEach( (() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: 'PlayerHttpFake', useClass: PlayerHttpFake},
                { provide: LoginFakeService,
                    useFactory: PlayerHttpfactory,
                    deps : ['PlayerHttpFake']
                }
            ]
        });

    }));

    describe('Log and register', (() => {
        it('should connect a good user', inject([ LoginFakeService ], ( LoginFakeService ) => {
            expect(LoginFakeService).toBeDefined();
            let login = 'demo';
            let password = '1234';
            LoginFakeService.validLogin(login, password).subscribe( data =>{
                expect(data).toEqual(true);
            });
        }));

        it('should not connect a wrong user', inject([ LoginFakeService ], ( LoginFakeService ) => {
            expect(LoginFakeService).toBeDefined();
            let login = 'omed';
            let password = '4321';
            LoginFakeService.validLogin(login, password).subscribe( data =>{
                expect(data).toEqual(false);
            });
        }));

    }));
});


