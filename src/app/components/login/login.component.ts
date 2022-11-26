import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  readonly loginForm: FormGroup = new FormGroup({
    password: new FormControl(),
    username: new FormControl()
  });

  constructor(private _loginService: LoginService) {
  }

  loginSubmit(loginForm: FormGroup): void {
    this._loginService.create({
      password: loginForm.get('password')?.value,
      username: loginForm.get('username')?.value,
    }).subscribe();
  }
}
