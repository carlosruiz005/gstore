import { Component, OnInit } from '@angular/core';
import { VentasService } from '../../services/ventas/ventas.service';
// import { Item } from 'src/app/interfaces/Item';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit';
import { ModalComponent } from '../modal/modal.component';
// import { forbiddenCharactersValidator } from 'src/app/shared/forbbiden-character.directive';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  barcode: any;
  salesForm: any;
  barcodeForm: FormGroup;

  constructor(private ventasService: VentasService, public cartService: CartService, public modalService: MdbModalService) {
    this.barcodeForm = new FormGroup({});
  }

  get f() { return this.barcodeForm.controls; }

  ngOnInit(): void {
    window.addEventListener("beforeunload", function (e) {
      console.log("prevent refresh");
      return "confirmationMessage";              // Gecko, WebKit, Chrome <34
    });
    this.barcodeForm = new FormGroup({
      barcodeVal: new FormControl(this.barcode, [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13),
        Validators.pattern(/^[0-9!\/?]*$/)
        // forbiddenCharactersValidator(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/) // <-- Here's how you pass in the custom validator.
      ])
    });
  }

  /**
   * Init variable for the sale
   */
  startSale() {
    this.ventasService.newSale = true;
    this.ventasService.startScanner = true;
  }

  isSaleOn() {
    return this.ventasService.newSale;
  }

  isScannerStarted() {
    return this.ventasService.startScanner;
  }

  /**
   * Set the sale off, stop the scanner and clean the car
   */
  finishSale() {
    this.ventasService.newSale = false;
    this.ventasService.startScanner = false;
    this.cartService.clearCart();
  }


  /**
   * On read barcode, get the string and trigger the search.
   * @param barcode string
   */
  getCurrentBarcode(barcode: any) {
    alert("Artículo a buscar: " + barcode);
    this.barcode = barcode;
    this.searchItem();
  }

  /**
   * Search the item object 
   */
  searchItem() {
    this.ventasService.findItemByBarcode(this.barcode)
      .subscribe(item => this.openAddAlert(this.cartService.addItem(item)));
  }

  /**
   * Create modal structure and trigger it
   * @param item Item
   */
  openAddAlert(item: any) {
    var message = "Artículo no encontrado."
    if (item != null || item !== undefined) {
      this.barcode = "";
      var message = "Artículo " + item.name + " agregado";
    }
    var modalInfo = {
      data: {
        title: 'Artículo',
        body: message
      },
      modalClass: 'modal-dialog-centered modal-sm'
    }
    this.modalService.open(ModalComponent, modalInfo);
  }

  ticketSale() {
    this.ventasService.startScanner = false;
    console.log("realiza cobro");
  }

}
