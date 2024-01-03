import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventAlertsComponent } from './event-alerts/event-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { TelevisionListComponent } from './television-list/television-list.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { TelevisionDetailsComponent } from './television-details/television-details.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'Home', component: HomeComponent },
      { path: 'List1', component: PhoneListComponent },
      { path: 'List2', component: TelevisionListComponent },
      { path: 'List3', component: LaptopListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'televisions/:televisionId', component: TelevisionDetailsComponent },
      { path: 'phones/:phoneId', component: PhoneDetailsComponent },
      { path: 'laptops/:laptopId', component: LaptopDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    EventListComponent,
    EventAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    PhoneListComponent,
    TelevisionListComponent,
    LaptopListComponent,
    TelevisionDetailsComponent,
    PhoneDetailsComponent,
    LaptopDetailsComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
