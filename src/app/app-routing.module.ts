import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path:'navbar', component:NavbarComponent},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path:'faqs', component:FaqsComponent},
  {path: 'home', component:HomeComponent},
  {path: 'itemDetails', component:ItemDetailsComponent},
  {path: 'cart', component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
