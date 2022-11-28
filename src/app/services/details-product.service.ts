import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailsProductModel } from '../models/details-product.model';

@Injectable()
export class DetailsProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: string): Observable<DetailsProductModel> {
    return this._httpClient.get<DetailsProductModel>(
      `https://fakestoreapi.com/products/${id}`
    )
  }
}
