import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EployeeModel } from '../models/eployee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  create(employee: Omit<EployeeModel,'id'>): Observable<EployeeModel> {
    return this._httpClient.post<EployeeModel>(
      'https://dummy.restapiexample.com/api/v1/create', employee,);
  }
}
