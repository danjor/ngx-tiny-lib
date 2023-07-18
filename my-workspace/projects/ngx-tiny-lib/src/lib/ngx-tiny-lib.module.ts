import { NgModule } from '@angular/core';
import { NgxTinyLibComponent } from './ngx-tiny-lib.component';
import { LodashPipe } from './lodash.pipe';



@NgModule({
  declarations: [
    NgxTinyLibComponent,
    LodashPipe
  ],
  imports: [
  ],
  exports: [
    NgxTinyLibComponent
  ]
})
export class NgxTinyLibModule { }
