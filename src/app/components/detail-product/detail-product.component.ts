import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap} from "rxjs";
import {DetailsProductModel} from "../../models/details-product.model";
import {DetailsProductService} from "../../services/details-product.service";

@Component({
  selector: 'app-detail-product',
  styleUrls: ['./detail-product.component.scss'],
  templateUrl: './detail-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailProductComponent {

  readonly productDetails$: Observable<DetailsProductModel> =
    this._activatedRoute.params.pipe(
      switchMap(data => this._detailProductService.getOne(
        data['id']
      ))
    )

  constructor(private _activatedRoute: ActivatedRoute,
              private _detailProductService: DetailsProductService) {
  }
}
