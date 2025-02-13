import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DetailProductComponent } from './detail-product.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [DetailProductComponent],
  providers: [],
  exports: [DetailProductComponent]
})
export class DetailProductComponentModule {
}
