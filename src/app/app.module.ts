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
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    AuthenticationComponent,
    RegisterComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
