import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.scss'],
  templateUrl: './menu.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  // readonly menu$: Observable<ProductModel[]> = this._productsService.getAll();
  //
  // constructor(private _productsService: ProductsService) {
  // }

  readonly menu$: Observable<ProductModel[]>
    = this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService) {
  }

}
