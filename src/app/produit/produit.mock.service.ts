// import {Injectable} from '@angular/core';
// import{Observable} from 'rxjs/Observable';
// import {of} from 'rxjs/observable/of';
//
// import {Produit} from '../shared/model/produit.model';
// import { CrudService } from './shared/crud.service';
//
// @Injectable()
// export class ProduitMockService implements CrudService{
//
//
//      private PRODUITS :Produit[] = [];
//
//   constructor(){
//
//    let p1:Produit =new Produit(1,'PC DELL',10000,13);
//    let p2:Produit =new Produit(2,'PC HP',5000,10);
//    let p3:Produit =new Produit(3,'Samsung A10',10500,13);
//    let p4:Produit =new Produit(4,'Huwai_11',10000,11);
//
//             this.PRODUITS.push(p1);
//               this.PRODUITS.push(p2);
//               this.PRODUITS.push(p3);
//               this.PRODUITS.push(p4);
//
//   }
// getAll():Observable<any>{
//   //create an observable
//     return of(this.PRODUITS);
// }
// add(produit):Observable<any>{
//   //create an observable
//     return of('success');
// }
//
// update(produit):Observable<any>{
//   //create an observable
//     return of('success');
// }
// delete(id):Observable<any>{
//   //create an observable
//     return of('success');
// }
// }
