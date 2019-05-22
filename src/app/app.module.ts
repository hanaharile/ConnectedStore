import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

<<<<<<< HEAD
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import {ProduitComponent} from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';
import { ContentComponent } from './content/content.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
=======
>>>>>>> crud_produit

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import {ProduitComponent} from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ProduitService } from './produit/produit.service';
// 
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
<<<<<<< HEAD
    ContentComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent
=======
    NavbarComponent,
    SidebarComponent,
    ContentComponent
>>>>>>> crud_produit
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
<<<<<<< HEAD
  providers: [ProduitMockService],
=======
  providers: [ProduitMockService, ProduitService],
>>>>>>> crud_produit
  bootstrap: [AppComponent]
})
export class AppModule { }
