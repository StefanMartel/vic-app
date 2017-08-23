import {Coordinate} from './coordinate.model';

export interface Board {
    initCoordinate: Coordinate
    width: number,
    height: number,
    backgroundColor: string;
}
