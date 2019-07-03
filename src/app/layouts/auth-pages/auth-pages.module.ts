import { NgModule } from '@angular/core'
import { AuthPagesRoutingModule } from './auth-pages-routing.module'
import { LoginComponent } from './login/login.component'
import { SharedModule } from 'src/app/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
  imports: [AuthPagesRoutingModule, FormsModule, ReactiveFormsModule, SharedModule],
  declarations: [LoginComponent],
})
export class AuthPagesModule {}
