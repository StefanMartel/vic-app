import {Component, Input} from '@angular/core';


@Component({
    selector: 'vic-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})

export class TitleComponent{
    @Input() title: string;

    constructor(){

    }

}