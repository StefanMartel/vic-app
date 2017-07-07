import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PlateauComponent} from "./plateau.component";
import {CaseComponent} from "./case/case.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlateauComponent, CaseComponent],
  exports: [PlateauComponent]
})

export class PlateauModule { }
