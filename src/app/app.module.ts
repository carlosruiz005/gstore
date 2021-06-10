import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";
import { HttpErrorInterceptor } from './http-error.interceptor';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { VentasService } from './services/ventas/ventas.service';
import { CartService } from './services/cart/cart.service';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { BarScannComponent } from './components/bar-scann/bar-scann.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ErrorComponent } from './components/error/error.component';
import { ServerUrls } from './shared/serverUrls';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    VentasComponent,
    InventarioComponent,
    ReportesComponent,
    BarScannComponent,
    MessagesComponent,
    ErrorComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BarcodeScannerLivestreamModule,
    ReactiveFormsModule
  ],
  providers: [
    ServerUrls,
    VentasService,
    CartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
