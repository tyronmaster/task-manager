import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { UserService } from '../services/user.service';
import { URI } from 'src/app/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private userService: UserService, private http: HttpClient) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.userService.getToken();
    if (token) {
      const requestWithToken = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }),
      });
      return next.handle(requestWithToken)
      // .
      //   pipe(catchError((err: HttpErrorResponse) => {
      //     if (err.status === 403) {
      //       return this.http.post(URI + 'auth/signin', {}).
      //         pipe(switchMap((res: any) => {
      //           this.userService.setToken(res.token);
      //           const newToken = this.userService.getToken();
      //           return next.handle(request.clone({
      //             setHeaders: {
      //               Authorization: `Bearer ${newToken}`,
      //               'Content-Type': 'application/json',
      //             }
      //           })
      //           )
      //         })
      //         );
      //     }
      //     return throwError(() => err);
      //   }));
    }
    return next.handle(request);
  }
}
