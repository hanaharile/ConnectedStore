import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';

// import { ChartModule } from 'angular2-chartjs';


import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
// import { ProduitComponent }  from './produit/produit.component';
// import { ProduitMockService } from './produit/produit.mock.service';
// import { NavbarComponent } from './navbar/navbar.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { ContentComponent } from './content/content.component';
// import { ProduitService } from './produit/produit.service';
// import { UserService } from './user/user.service';


// import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { AppService } from './app.service';
// import { AuthenticationModule } from './login/authentication.module';
// import { XhrInterceptor } from './xhr.interceptor';
// import { UserComponent } from './user/user.component';
import { XhrInterceptor } from './authentication/xhr.interceptor';
import { principalReducer } from './authentication/shared/principal.reducer';
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule} from './dashboard/dashboard.module';
import { AppMenuModule } from './menu/app.menu.module';
import { ProduitModule } from './produit/produit.module';
import { CrudComponent } from './shared/crud/crud.component';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
// import { MyChartComponent } from './my-chart/my-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    // ProduitComponent,
    // ContentComponent,
    // NavbarComponent,
    // SidebarComponent,
    // DashboardComponent,
    // LoginComponent,
    // HomeComponent,
    // UserComponent,
    // CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     StoreModule.forRoot({principal: principalReducer}),
    // AuthenticationModule,
    HttpClientModule,
     AuthenticationModule,
     DashboardModule,
   AppMenuModule,
   ProduitModule,
   UserModule,
SharedModule
    // ChartModule
  ],
  providers: [
 { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
