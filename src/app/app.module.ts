import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent }  from './produit/produit.component';
import { ProduitMockService } from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ProduitService } from './produit/produit.service';
import { UserService } from './user/user.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
// import { AuthenticationModule } from './login/authentication.module';
import { XhrInterceptor } from './xhr.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { UserComponent } from './user/user.component';
import { principalReducer } from './shared/principal.reducer';
import { CrudComponent } from './shared/crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ContentComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     StoreModule.forRoot({principal: principalReducer}),
    // AuthenticationModule,
    HttpClientModule
  ],
  providers: [ProduitMockService, ProduitService, UserService, AppService,
 { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
