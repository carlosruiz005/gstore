import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
/***
 * Intercepta todas las llamadas de http que se realicen. Si existe un error de lado del servidor, redicionará a la página de error.
 */
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    console.log("error status: " + error.status);
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error de usuario: ${error.error.message}`;
                    } else {
                        // server-side error

                        if (error.status == 500 || error.status == 0) {
                            errorMessage = `Mensaje del servidor: ${error.message}. Status: ${error.status}`;
                            window.location.href = "error?name=" + errorMessage;
                        }
                    }
                    return throwError(errorMessage);
                })
            )
    }
}