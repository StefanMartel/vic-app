import {Injectable} from '@angular/core';
import {IBoardService} from '../i-board.service';
import {Board} from '../../../models/board.model';
import {caseInitValues, boardInitValues} from '../../../../shared/global-variable';
import {Case, CaseDrawReturn} from '../../../models/case.model';
import {Coordinate} from '../../../models/coordinate.model';
import {ICaseService} from '../../case/i-case.service';

@Injectable()
export class BoardFakeService implements IBoardService {

    boardConfig: Board;
    ctx: CanvasRenderingContext2D;
    private currentCase: Case;
    nbLine: number;

    startCase: Case;
    lastCaseDrawing: Case;

    constructor(public caseRepository: ICaseService) {
        this.nbLine = 0;

        this.initConfig(boardInitValues);
        this.startCase = caseInitValues;
    }

    initConfig(config) {
        this.boardConfig = config;
    }

    draw(whereToDraw: CanvasRenderingContext2D) {
        this.currentCase = caseInitValues;
        this.changeStartCase();
        this.currentCase = this.cloneJSON(this.startCase);

        this.ctx = whereToDraw;
        this.ctx.fillStyle = '#215498';
        this.ctx.clearRect(0, 0, this.boardConfig.width, this.boardConfig.height);
        this.ctx.fillRect(0, 0, this.boardConfig.width, this.boardConfig.height);

        this.caseRepository.draw(this.ctx, this.currentCase, {x: this.boardConfig.width, y: this.boardConfig.height});

        this.lastCaseDrawing = this.cloneJSON(this.currentCase);

        this.manageHorizontalDrawing();

    }

    private manageHorizontalDrawing(){
        let retour: CaseDrawReturn = CaseDrawReturn.OK;
        while (retour !== CaseDrawReturn.KO_XFault) {
            this.nbLine++;
            this.drawVerticalLine();
            retour = this.drawStartOfNewLine();
        }
    }

    private drawVerticalLine(): void {
        let returnTmp: CaseDrawReturn = CaseDrawReturn.OK;

        while (returnTmp !== CaseDrawReturn.KO_YFault) {
            this.lastCaseDrawing = this.cloneJSON(this.currentCase);
            this.currentCase.defaultColorOfCase = '#119900';
            this.currentCase.coordinate.y += this.nbLine % 2 === 0 ? this.calculateCoordinateToAdd(this.currentCase, 4).y *2 : this.calculateCoordinateToAdd(this.currentCase, 1).y * 2 ;
            returnTmp = this.caseRepository.draw(this.ctx, this.currentCase, {x: this.boardConfig.width + 100, y: this.boardConfig.height});
        }
        this.currentCase = this.cloneJSON(this.lastCaseDrawing);
    }

    private drawStartOfNewLine(): CaseDrawReturn {
        const tabIndice = this.getUpOrDownNewLine(this.nbLine);
        let retourTmp: CaseDrawReturn;

        for (const value of tabIndice){
            this.set(this.currentCase, 'defaultColorOfCase', '#119900');
            this.set(this.currentCase, 'coordinate', this.calculateNextCaseCoordinate(this.currentCase, value));
            retourTmp = this.caseRepository.draw(this.ctx, this.currentCase, {x: this.boardConfig.width + 100, y: this.boardConfig.height});
            if (retourTmp !== CaseDrawReturn.OK) {
                this.currentCase = this.cloneJSON(this.lastCaseDrawing)
            }else {
                break;
            }
        };
        return retourTmp;
    }

    private getUpOrDownNewLine(nbLine: number): Array<number> {
        // On test les positions 1 et 5 pour voir de ou on repart (sans dépasser le canvas)
        return nbLine % 2 === 0 ? [5, 1] : [1, 5];
    }

    public set(object, param, value) {
        object[param] = value;
    }

    public cloneJSON (original: any): any {
        return JSON.parse(JSON.stringify(original));
    }

    private changeStartCase() {
        this.startCase.coordinate.x -= 2;
    }

    private calculateNextCaseCoordinate(fromCase: Case, fromWhichSize: number): Coordinate {
        return {
            x : fromCase.coordinate.x + this.calculateCoordinateToAdd(fromCase, fromWhichSize).x ,
            y : fromCase.coordinate.y + this.calculateCoordinateToAdd(fromCase, fromWhichSize).y
        }
    }

    private calculateCoordinateToAdd(fromCase: Case, fromWhichSize: number): Coordinate {
        return {
            x : Math.round( fromCase.sizeOfCase *  (1 + Math.cos(fromWhichSize * 2 * Math.PI / fromCase.numberOfSides))) ,
            y : Math.round( fromCase.sizeOfCase * Math.sin(fromWhichSize * 2 * Math.PI / fromCase.numberOfSides))
        }
    }
}