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
