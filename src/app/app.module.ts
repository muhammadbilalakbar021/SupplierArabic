import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ProductsComponent } from './products/products.component';
import { FeaturedProductsComponent } from './products/featured-products/featured-products.component';
import { BidManagementComponent } from './bid-management/bid-management.component';
import { BidManagmentDetailsComponent } from './bid-management/bid-managment-details/bid-managment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    AuthenticationComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    FeaturedProductsComponent,
    BidManagementComponent,
    BidManagmentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatRadioModule,
    MatSidenavModule,
    RouterModule,
    MatListModule,
    MatExpansionModule,
    CdkAccordionModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
