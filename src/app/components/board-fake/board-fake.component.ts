import {Component, ElementRef, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {IBoardService} from '../../../domain/services/board/i-board.service';
import {boardInitValues} from '../../../shared/global-variable';
import {Board} from '../../../domain/models/board.model';

@Component({
    selector: 'vic-board-fake',
    templateUrl: './board-fake.component.html',
    styleUrls: ['./board-fake.component.scss']
})

export class BoardFakeComponent implements OnInit{

    @ViewChild('boardCanvas') canvasRef: ElementRef;
    ctx: CanvasRenderingContext2D;
    boardConfig: Board;

    constructor(@Inject('BoardService') public repository: IBoardService){
    }

    ngOnInit() {
        this.boardConfig = boardInitValues;
        this.draw();
    }

    @HostListener('window:resize')
    onResize() {
        this.initCanvasSize();
        this.draw();
    }

    draw() {
        this.configScreenSize();
        this.repository.initConfig(this.boardConfig);

        this.ctx = this.canvasRef.nativeElement.getContext('2d');

        this.repository.draw(this.ctx);
        requestAnimationFrame(() => this.draw());
    }

    configScreenSize(): void{
        this.recupScreenSize();
        const canvas = this.canvasRef.nativeElement;
        canvas.width = this.boardConfig.width;
        canvas.height = this.boardConfig.height;
    }

    recupScreenSize(): void {
        this.boardConfig.width = document.body.clientWidth;
        this.boardConfig.height = document.body.scrollHeight;
    }

    initCanvasSize(): void {
        this.boardConfig.width = 1;
        this.boardConfig.height = 1;
    }

}
