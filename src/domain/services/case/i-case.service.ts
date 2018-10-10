import {Case} from '../../models/case.model';
import {Coordinate} from '../../models/coordinate.model';

export interface ICaseService{
    draw(whereToDraw: any, caseToDraw: Case, limitOfPlateau: Coordinate);
}