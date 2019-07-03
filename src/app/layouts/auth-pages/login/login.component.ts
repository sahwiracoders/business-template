import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  backgroundNumber = 1
  fullScreen = false
  validateForm: FormGroup
  form: FormGroup
  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.form = fb.group({
      email: ['admin@mediatec.org', [Validators.required, Validators.minLength(4)]],
      password: ['cleanui', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({})
  }

  changeBackground(): void {
    if (this.backgroundNumber === 5) {
      this.backgroundNumber = 1
    } else {
      this.backgroundNumber += 1
    }
  }

  changeScreen(): void {
    this.fullScreen = !this.fullScreen
  }

  get email() {
    return this.form.controls.email
  }
  get password() {
    return this.form.controls.password
  }

  submitForm(): void {
    this.email.markAsDirty()
    this.email.updateValueAndValidity()
    this.password.markAsDirty()
    this.password.updateValueAndValidity()
    if (this.email.invalid || this.password.invalid) return
    this.authService.SignIn(this.email.value, this.password.value)
  }
}
