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
import { ReportsComponent } from './reports/reports.component';
import { FinanceComponent } from './reports/finance/finance.component';
import { BalanceSheetComponent } from './reports/balance-sheet/balance-sheet.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BidManagementComponent } from './bid-management/bid-management.component';
import { BidManagmentDetailsComponent } from './bid-management/bid-managment-details/bid-managment-details.component';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { PhoneVerificationComponent } from './authentication/phone-verification/phone-verification.component';
import { LoginComponent } from './authentication/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { SlickCarouselModule } from 'ngx-slick-carousel';

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
    ReportsComponent,
    FinanceComponent,
    BalanceSheetComponent,
    BidManagementComponent,
    BidManagmentDetailsComponent,
    ForgetPasswordComponent,
    PhoneVerificationComponent,
    LoginComponent
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
    CdkAccordionModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SlickCarouselModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
  ],

  providers: [AuthenticationGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

