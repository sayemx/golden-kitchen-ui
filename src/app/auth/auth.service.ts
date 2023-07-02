import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import baseUrl from '../shared/helper';
import { environment } from 'src/environments/environment';
// import { Router } from '@angular/router';
// import { tap, Subject, BehaviorSubject } from 'rxjs';
// import { User } from './user.model';

// export interface AuthResponseData {
//   kind: string;
//   idToken: string;
//   email: string;
//   refreshToken: string;
//   expiresIn: string;
//   localId: string;
//   registeres?: boolean;
// }

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   user = new BehaviorSubject<User>(null);
//   tokenExpirationTimer: any;
//   constructor(private http: HttpClient, private router: Router) {}

//   signup(email: string, password: string) {
//     return this.http
//       .post<AuthResponseData>(
//         'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbKm1uZtJqkBvjyaUEG9C35z0TYyMOP0A',
//         {
//           email: email,
//           password: password,
//           returnSecureToken: true,
//         }
//       )
//       .pipe(
//         tap((resData) => {
//           this.handleAuthentication(
//             resData.email,
//             resData.localId,
//             resData.idToken,
//             +resData.expiresIn
//           );
//         })
//       );
//   }

//   login(email: string, password: string) {
//     return this.http
//       .post<AuthResponseData>(
//         'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbKm1uZtJqkBvjyaUEG9C35z0TYyMOP0A',
//         {
//           email: email,
//           password: password,
//           returnSecureToken: true,
//         }
//       )
//       .pipe(
//         tap((resData) => {
//           this.handleAuthentication(
//             resData.email,
//             resData.localId,
//             resData.idToken,
//             +resData.expiresIn
//           );
//         })
//       );
//   }

//   private handleAuthentication(
//     email: string,
//     userId: string,
//     token: string,
//     expiresIn: number
//   ) {
//     const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
//     const user = new User(email, userId, token, expirationDate);
//     this.user.next(user);
//     this.autologout(expiresIn * 1000);
//     localStorage.setItem('userData', JSON.stringify(user));
//   }

//   logout() {
//     this.user.next(null);
//     this.router.navigate(['/login']);
//     // localStorage.clear();
//     localStorage.removeItem('userData');
//     if (this.tokenExpirationTimer) {
//       clearTimeout(this.tokenExpirationTimer);
//     }
//     this.tokenExpirationTimer = null;
//   }

//   autologin() {
//     const userData: {
//       email: string;
//       id: string;
//       _token: string;
//       _tokenExpirationDate: string;
//     } = JSON.parse(localStorage.getItem('userData'));
//     if (!userData) {
//       return;
//     }

//     const loadedUser = new User(
//       userData.email,
//       userData.id,
//       userData._token,
//       new Date(userData._tokenExpirationDate)
//     );

//     if (loadedUser.token) {
//       this.user.next(loadedUser);
//       const expirationDuration =
//         new Date(userData._tokenExpirationDate).getTime() -
//         new Date().getTime();
//       this.autologout(expirationDuration);
//     }
//   }

//   autologout(expirationDuration: number) {
//     this.tokenExpirationTimer = setTimeout(() => {
//       this.logout();
//     }, expirationDuration);
//   }
// }

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  //add user

  public addUser(user: any) {
    return this.http.post(`${environment.baseUrl}/user/`, user);
  }
}
