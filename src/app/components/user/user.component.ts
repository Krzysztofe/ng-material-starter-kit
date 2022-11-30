import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

  constructor(private _userService: UserService,
              private _activatedRoute: ActivatedRoute) {
  }

readonly user$: Observable<UserModel> =
  this._userService.getAll()

  readonly userDetails$: Observable<UserModel> =
    this._activatedRoute.params as Observable<UserModel>
}