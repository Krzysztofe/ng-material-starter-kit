import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidayModel } from '../../models/holiday.model';
import { HolidaysService } from '../../services/holidays.service';

@Component({
  selector: 'app-holidays',
  styleUrls: ['./holidays.component.scss'],
  templateUrl: './holidays.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidaysComponent {
  readonly holidays$: Observable<HolidayModel[]> = this._holidaysService.getAll();

  constructor(private _holidaysService: HolidaysService) {
  }
}
