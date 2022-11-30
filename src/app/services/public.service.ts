import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PublicModel} from "../models/public.model";

@Injectable()
export class PublicService {

  constructor(private _httpClient: HttpClient) {
  }

  getAll():Observable<PublicModel>{
    return this._httpClient.get<PublicModel>(
      'https://www.boredapi.com/api/activity'
    )
  }

}
