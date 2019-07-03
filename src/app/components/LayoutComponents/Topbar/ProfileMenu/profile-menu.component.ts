import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'cui-topbar-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class TopbarProfileMenuComponent {
  badgeCount: number = 7
  userName?: string
  billingPlan: string
  email: string
  phone: string
  role: string

  constructor(public authService: AuthService) {
    const userInfo = JSON.parse(localStorage.getItem('user'))
    if (userInfo !== null && userInfo !== undefined) {
      this.userName = userInfo.displayName || 'Anonymous'
      this.email = userInfo.email
      this.phone = userInfo.phoneNumber || '-'
    } else {
      this.userName = 'Kayz'
      this.email = 'rkanavheti@gmail.com'
      this.phone = '0774695900'
    }
    this.billingPlan = 'Professional'
    this.role = 'admin'
  }

  badgeCountIncrease() {
    this.badgeCount = this.badgeCount + 1
  }

  logout() {
    this.authService.SignOut()
  }
}
