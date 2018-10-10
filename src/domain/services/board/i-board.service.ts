import {Board} from '../../models/board.model';

export interface IBoardService {
    boardConfig: Board;
    draw(whereToDraw);
    initConfig(config: Board);
}
