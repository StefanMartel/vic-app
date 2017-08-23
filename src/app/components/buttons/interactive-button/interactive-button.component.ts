import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'vic-interactive-button',
  templateUrl: './interactive-button.component.html',
  styleUrls: ['./interactive-button.component.scss'],
  animations : [

    trigger('container', [
      state('*', style({width: '*'})),
      state('pending', style({width: '*'})),
      transition('* => pending', [
        animate('0.1s 0.15s ease-in')
      ]),
      transition('pending => *', [
        animate('0.1s ease-out')
      ])
    ]),

    trigger('initial', [
      state('initial', style({ opacity: 1, transform: 'scale(1)'})),
      state('*',       style({ opacity: 0, transform: 'scale(0.75)'})),
      transition('initial => *', [
        animate('0.15s ease-in')
      ]),
      transition('* => initial', [
        animate('0.15s 0.15s ease-out')
      ])
    ]),

    trigger('pending', [
      state('pending', style({ opacity: 1, transform: 'translateY(0)'})),
      state('*',       style({ opacity: 0, transform: 'translateY(15px)'})),
      transition('pending => *', [
        animate('0.15s ease-in')
      ]),
      transition('* => pending', [
        animate('0.15s ease-out')
      ])
    ]),

    trigger('error', [
      state('error', style({ opacity: 1, transform: 'scale(1)'})),
      state('*',     style({ opacity: 0, transform: 'scale(0.75)', position: 'absolute'})),
      transition('error => *', [
        style({ position : 'absolute', top: '1em' }),
        animate('0.15s ease-in')
      ]),
      transition('* => error', [
        animate('0.15s ease-out')
      ])
    ]),

    trigger('success', [
      state('success', style({ opacity: 1, transform: 'scale(1)'})),
      state('*',     style({ opacity: 0, transform: 'scale(0.75)', position: 'absolute'})),
      transition('success => *', [
        style({ position : 'absolute', top: '1em' }),
        animate('0.15s ease-in')
      ]),
      transition('* => success', [
        animate('0.15s ease-out')
      ])
    ])
  ]
})

export class InteractiveButtonComponent implements OnChanges {

  @Input() public type = 'submit';
  @Input() public state = 'initial';

  @Input() public disabled = false;
  @Input() public label: string;
  @Input() public errorLabel: string;
  @Input() public successLabel: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
      if (changes.state) {
        changes.state.currentValue !== 'initial' ? this.disabled = true : null;
      }

  }

}
