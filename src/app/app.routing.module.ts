import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitResolver } from './produit/shared/service/produit.resolver.service';
import { UserResolver } from './user/shared/service/user.resolver.service';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


export const appRoutes: Routes = [
  {  path: 'login',  component: LoginComponent},
  {  path: 'home',   component: HomeComponent},
  {  path: '',  redirectTo: '/home',  pathMatch: 'full' },
  {  path: 'produit', component: ProduitComponent,
   resolve: {
      produits: ProduitResolver
    }
  },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'user', component: UserComponent,
    resolve: {
      users: UserResolver
    }
  }
];



// export const appRoutes: Routes = [
//   {  path: 'login',  component: LoginComponent},
//     {  path: 'home',   component: HomeComponent,
//       children:[
//         {  path: 'produit',
//          component: ProduitComponent,
//          resolve: {
//             produits: ProduitResolver
//           },
//           outlet:'contentOutlet'
//         },
//         { path: 'dashboard',  component: DashboardComponent,
//
//         outlet:'contentOutlet'
//       },
//       { path: 'user', component: UserComponent,
//               resolve: {
//                 users: UserResolver
//               },
//       outlet:'contentOutlet'
//     }
//       ]
//   },
//     {  path: '',  redirectTo: '/home',  pathMatch: 'full' },
// ];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule],
  providers: [ProduitResolver,UserResolver]
})
export class AppRoutingModule{

}
