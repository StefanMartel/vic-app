import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardFakeComponent} from './board-fake.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [BoardFakeComponent],
    exports: [BoardFakeComponent]
})

export class BoardFakeModule { }
