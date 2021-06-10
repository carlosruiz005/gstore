import { Component, OnInit, ViewChild, AfterViewInit, Output, Input, EventEmitter } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
  selector: 'app-bar-scann',
  templateUrl: './bar-scann.component.html',
  styleUrls: ['./bar-scann.component.scss']
})

export class BarScannComponent implements AfterViewInit {
  // @Input()
  // startScanner: boolean;
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent | undefined;
  @Output()
  currentBarCode = new EventEmitter();

  barcodeValue: any;

  constructor(){
    // this.startScanner = false;
  }

  ngAfterViewInit() {
    if (this.barcodeScanner !== undefined) {
      this.barcodeScanner.start();
    } else {
      console.log("El objeto del scanner es undefined");
    }
  }

  initScan() {
    
  }

  onValueChanges(result: any) {
    this.barcodeValue = result.codeResult.code;
    this.currentBarCode.emit(this.barcodeValue);
  }

  onStarted(started: any) {
    console.log(started);
  }
}
