import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../../interfaces/Item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagesService } from '../../services/messages/messages.service';
import { ServerUrls } from '../../shared/serverUrls';
import { catchError, tap } from 'rxjs/operators';
import { HandleClientError} from '../../shared/handleError';


@Injectable({
  providedIn: 'root'
})
export class VentasService {
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    )
  };

  public newSale: boolean = false;
  public startScanner: boolean = false;

  constructor(
    private http: HttpClient, 
    private messagesService: MessagesService, 
    private serverUrls: ServerUrls,
    private handleClientError: HandleClientError) {
  }

  findItemByBarcode(barcode: any): Observable<Item> {
    if (!barcode.trim()) {
      return of();
    }
    return this.http
      .get<Item>(this.serverUrls.findItemByBarcodeUrl + barcode, this.httpOptions)
      .pipe(
        tap(_ => console.log("Buscando artículo...")),
        catchError(this.handleClientError.handleError<Item>('findItems'))
        );
  }

 
}
