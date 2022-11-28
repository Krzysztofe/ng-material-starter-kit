import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {CatService} from "../../services/cat.service";
import {Observable} from "rxjs";
import {CatModel} from "../../models/cat.model";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatComponent {

  constructor(private _catService: CatService ) {
  }

  readonly cat$: Observable<CatModel> =
    this._catService.getAll()
}
