import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserComponent } from './user.component';
import { AsyncPipe, NgIf } from '@angular/common';

@NgModule({
  imports: [
    AsyncPipe,
    NgIf,
    CommonModule,
    MatCardModule
  ],
  declarations: [UserComponent],
  providers: [],
  exports: [UserComponent]
})
export class UserComponentModule {
}
