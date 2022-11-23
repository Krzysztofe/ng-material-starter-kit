import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-category',
  styleUrls: ['./product-category.component.scss'],
  templateUrl: './product-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoryComponent {
  readonly list$: Observable<ProductModel[]> = this._productsService.getAll();

  constructor(private _productsService: ProductsService) {
  }
}
