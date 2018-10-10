import {inject, TestBed} from '@angular/core/testing';

import { BoardFakeService } from './board-fake.service';
import {CaseFakeService} from '../../case/fake/case-fake.service';
import {caseInitValues} from '../../../../shared/global-variable';
import {Case} from '../../../models/case.model';
import {boardServicefactory} from '../../../../app/pages/login/login.module';


describe('Board Service', () => {
    beforeEach((() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: 'CaseService', useClass: CaseFakeService},
                { provide: BoardFakeService,
                    useFactory: boardServicefactory,
                    deps : ['CaseService']
                },
            ]
        });
        TestBed.compileComponents();
    }));

    describe('coordinate calculate', () => {
        it('should calculate the next case coordinate', inject([ BoardFakeService ], ( BoardFakeService ) => {
            expect(BoardFakeService).toBeDefined();
            let testCase: Case = caseInitValues;
            testCase.coordinate = {'x' : 20, 'y' : 20};
            expect(BoardFakeService.calculateNextCaseCoordinate(testCase, 2)).toEqual({ 'x': 35, 'y': 46});
        }));

        it('should calculate add the good next case coordinate', inject([ BoardFakeService ], ( BoardFakeService ) => {
            expect(BoardFakeService).toBeDefined();
            let testCase: Case = caseInitValues;
            testCase.coordinate = {'x' : 20, 'y' : 20};
            expect(BoardFakeService.calculateCoordinateToAdd(testCase, 2)).toEqual({ 'x': 15, 'y': 26});
        }));
    });
});


