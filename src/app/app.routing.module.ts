<<<<<<< HEAD
import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProductResolver } from './product/shared/service/product.resolver.service';
// import { UserResolver } from './user/shared/service/user.resolver.service';
// import { LoginComponent } from './authentication/login/login.component';
// import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';

export const appRoutes: Routes = [
//   {  path: 'login',  component: LoginComponent},
//   {  path: 'home',   component: HomeComponent},
//   {  path: '',  redirectTo: '/home',  pathMatch: 'full' },
  {  path: 'produit', component: ProduitComponent},
//    resolve: {
//       products: ProductResolver
//     }
  // },
  { path: 'dashboard',  component: DashboardComponent },
//   { path: 'user', component: UserComponent,
//     resolve: {
//       users: UserResolver
//     }
//   }
{path: '',redirectTo: 'dashboard',pathMatch:'full'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule],
  // providers: [ProductResolver, UserResolver]
})
export class AppRoutingModule{

}
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitComponent} from './produit/produit.component';
import {ProduitResolver} from './produit/produit.resolver';

const routes: Routes = [
  { path: 'produit',
   component: ProduitComponent,
   resolve:{
     produits:ProduitResolver
   }
  }
   // { path: 'dashboard', component: ContentComponent }
  ];
@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing : true}
  )],
  exports: [RouterModule],
  providers :[ProduitResolver]
})

export class AppRoutingModule { }
>>>>>>> crud_produit
