import {ICaseService} from '../i-case.service';
import {Case, CaseDrawReturn} from '../../../models/case.model';
import {Coordinate} from '../../../models/coordinate.model';

export class CaseFakeService implements ICaseService {

    constructor() {}


    draw(whereToDraw: CanvasRenderingContext2D, caseToDraw: Case, limitOfPlateau: Coordinate , goOutOfPlateau: boolean = false): CaseDrawReturn{
        whereToDraw.fillStyle = caseToDraw.defaultColorOfCase;
        whereToDraw.beginPath();
        whereToDraw.moveTo (caseToDraw.coordinate.x + caseToDraw.sizeOfCase * Math.cos(0), caseToDraw.coordinate.y + caseToDraw.sizeOfCase * Math.sin(0));

        for (let i = 1; i <= caseToDraw.numberOfSides ; i++) {
            const x = caseToDraw.coordinate.x + caseToDraw.sizeOfCase * Math.cos(i * 2 * Math.PI / caseToDraw.numberOfSides),
                y = caseToDraw.coordinate.y + caseToDraw.sizeOfCase * Math.sin(i * 2 * Math.PI / caseToDraw.numberOfSides);
            if ( (x > limitOfPlateau.x ) && !goOutOfPlateau) { return CaseDrawReturn.KO_XFault; }
            if ( (y > limitOfPlateau.y || y < 0) && !goOutOfPlateau) { return CaseDrawReturn.KO_YFault; }
            whereToDraw.lineTo (x , y);
        }
        whereToDraw.fill();
        return CaseDrawReturn.OK;

    }
}
