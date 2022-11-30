import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CartModel} from "../models/cart.model";

@Injectable()
export class CartService {
  constructor(private _httpClien: HttpClient) {
  }

  getOne(id: string): Observable<CartModel>{
    return this._httpClien.get<CartModel>(
      `https://fakestoreapi.com/carts/${id}`)
  }

}
