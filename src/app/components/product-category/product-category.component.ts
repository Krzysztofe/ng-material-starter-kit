import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-product-category',
  styleUrls: ['./product-category.component.scss'],
  templateUrl: './product-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoryComponent {
  readonly category$: Observable<ProductModel[]>
    = this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService) {
  }
}
