import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { CatComponent } from './cat.component';

@NgModule({
  imports: [
    AsyncPipe,
    NgIf,
    MatButtonToggleModule,
    CommonModule,
    MatCardModule
  ],
  declarations: [CatComponent],
  providers: [],
  exports: [CatComponent]
})
export class CatComponentModule {
}
