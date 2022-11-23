import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductCategoryComponent } from './product-category.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [ProductCategoryComponent],
  providers: [],
  exports: [ProductCategoryComponent]
})
export class ProductCategoryComponentModule {
}
