/*
 * @CreateTime: Sep 6, 2018 4:45 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Dec 12, 2018 3:09 PM
 * @Description: Http Intercepter to modify passing http request
 */
import { Injectable } from "@angular/core";

import {
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { tap, catchError, finalize } from "rxjs/operators";

@Injectable()
export class RmHeaderInterceptorService implements HttpInterceptor {
  constructor(private location: ActivatedRoute) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const requestUrl = request.url;
    const started = Date.now();
    const modifiedRequest = request.clone({
      url: `http://localhost:5000/api/${requestUrl}`,
      setHeaders: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json"
      }
    });
    return next.handle(modifiedRequest).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 201) {
          alert("Data Saved successfuly");
        } else if (event instanceof HttpResponse && event.status === 204) {
          alert("Data Updated successfuly");
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          // 401 handled in auth.interceptor
          console.error(error.message);
        }
        return throwError(error);
      }),
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${request.method} "${
          request.urlWithParams
        }" in ${elapsed} ms.`;
        console.log(msg);
      })
    );
  }
}
