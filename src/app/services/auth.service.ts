import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { NzNotificationService } from 'ng-zorro-antd'

interface User {
  uid: string
  email: string
  displayName: string
  photoURL: string
  emailVerified: boolean
  role: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any

  constructor(public router: Router, private notification: NzNotificationService) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //   } else {
    //     localStorage.setItem('user', null);
    //   }
    // });
  }

  async SignIn(email: string, password: string) {
    this.router.navigate(['main/dashboard'])
    // try {
    //   await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    //   this.router.navigate(['dashboard/alpha']);
    //   this.notification.success(
    //     'Logged In',
    //     'You have successfully logged in to Clean UI Angular Admin Template!',
    //   );
    // } catch (error) {
    //   this.notification.error(error.code, error.message);
    // }
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'))
    return user !== null
  }

  async SignOut() {
    //   await this.afAuth.auth.signOut();
    //   localStorage.removeItem('user');
    //   this.router.navigate(['user/login']);
  }
}
