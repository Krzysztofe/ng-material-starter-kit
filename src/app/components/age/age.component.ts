import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import { AgeService } from '../../services/age.service';
import { AgeModel } from '../../models/age.model';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgeComponent {
  constructor(private _ageService: AgeService,
              private _activatedRoute: ActivatedRoute) {
  }

  readonly ageDetails$: Observable<AgeModel> =
    this._activatedRoute.params.pipe(
      switchMap(data => this._ageService.getAll())
    )

}
