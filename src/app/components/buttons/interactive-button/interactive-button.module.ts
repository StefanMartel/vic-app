import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractiveButtonComponent } from './interactive-button.component';
import { LoadingModule } from '../../loading/loading.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, LoadingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    InteractiveButtonComponent
  ],
  exports: [
    InteractiveButtonComponent
  ]
})

export class InteractiveButtonModule { }
