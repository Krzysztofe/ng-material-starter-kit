import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { AsyncPipe, NgIf } from '@angular/common';

@NgModule({
  imports: [
    AsyncPipe,
    NgIf,
    CommonModule
  ],
  declarations: [PublicComponent],
  providers: [],
  exports: [PublicComponent]
})
export class PublicComponentModule {
}
