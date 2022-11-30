import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {Observable, switchMap} from "rxjs";
import {CartModel} from "../../models/cart.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {

  constructor(private _activatedRoute: ActivatedRoute,
              private _cartService: CartService) {
  }

  readonly cartDetail$: Observable<CartModel> =
    this._activatedRoute.params.pipe(
      switchMap(data => this._cartService.getOne(
        data['id']
      ))
    )


}
