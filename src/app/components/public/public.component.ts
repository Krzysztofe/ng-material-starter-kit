import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {PublicService} from "../../services/public.service";
import {Observable} from "rxjs";
import {PublicModel} from "../../models/public.model";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicComponent {

  constructor(private _publicService: PublicService) {
  }

  readonly publicData$: Observable<PublicModel> =
    this._publicService.getAll()

}
