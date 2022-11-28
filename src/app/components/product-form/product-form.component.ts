import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {ProductSelectService} from "../../services/product-select.service";

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {

  constructor(private _productService: ProductService, private _productSelectService: ProductSelectService) {
  }

  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl()
  });

  readonly select$: Observable<ProductModel[]> =
    this._productSelectService.getAll();


  onProductFormSubmitted(productForm: FormGroup): void {
    this._productService.create({
      title: productForm.get('title')?.value,
      category: productForm.get('category')?.value,
      price: productForm.get('price')?.value,
      description: productForm.get('description')?.value,
      image: productForm.get('image')?.value
    }).subscribe();
  }

}
