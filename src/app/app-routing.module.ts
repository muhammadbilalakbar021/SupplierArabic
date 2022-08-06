import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { LoginComponent } from './authentication/login/login.component';
import { PhoneVerificationComponent } from './authentication/phone-verification/phone-verification.component';
import { RegisterComponent } from './authentication/register/register.component';
import { BidManagementComponent } from './bid-management/bid-management.component';
import { BidManagmentDetailsComponent } from './bid-management/bid-managment-details/bid-managment-details.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { BalanceSheetComponent } from './reports/balance-sheet/balance-sheet.component';
import { FinanceComponent } from './reports/finance/finance.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'phone-verification', component: PhoneVerificationComponent },
  { path: '', component: HomeComponent },
  { path: 'products', canActivate:[AuthenticationGuard], component: ProductsComponent },
  { path: 'product-details',canActivate:[AuthenticationGuard], component: ProductDetailsComponent },
  {
    path: 'reports',
    // canActivate:[AuthenticationGuard],
    component: ReportsComponent,
    children: [
      {
        path: 'finance',
        component: FinanceComponent,
      },
      {
        path: 'balances',
        component: BalanceSheetComponent,
      },
    ],
  },
  { path: 'bid-management', canActivate:[AuthenticationGuard], component: BidManagementComponent },
  { path: 'bid-details', canActivate:[AuthenticationGuard], component: BidManagmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
