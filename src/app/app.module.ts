import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartComponent } from './cart/cart.component';
import { VwComponent } from './brands/vw/vw.component';
import { BmwComponent } from './brands/bmw/bmw.component';
import { BenzComponent } from './brands/benz/benz.component';
import { AudiComponent } from './brands/audi/audi.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    FaqsComponent,
    HomeComponent,
    ItemDetailsComponent,
    CartComponent,
    VwComponent,
    BmwComponent,
    BenzComponent,
    AudiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
