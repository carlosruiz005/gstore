import { Injectable } from '@angular/core';

@Injectable()
export class ServerUrls {
  server: string = "https://192.168.0.6:8080/";
  findItemByBarcodeUrl: string = this.server + "ventas/items/";
}