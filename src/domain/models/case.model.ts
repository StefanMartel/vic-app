import {Coordinate} from './coordinate.model';

export interface Case {
    numberOfSides: number,
    sizeOfCase: number,
    defaultColorOfCase: string,
    coordinate: Coordinate
}

export enum CaseDrawReturn {
    OK,
    KO_XFault,
    KO_YFault
}
