import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { BalanceSheetComponent } from './reports/balance-sheet/balance-sheet.component';
import { FinanceComponent } from './reports/finance/finance.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProductsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  {
    path: 'reports',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
