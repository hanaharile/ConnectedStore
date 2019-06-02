import { Injectable } from '@angular/core';

import { CrudService } from '../../../shared/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService extends CrudService{
  url = '/produits';
}

// import{Injectable} from '@angular/core';
// import{HttpClient} from '@angular/common/http';
// import{Observable} from 'rxjs/Observable';
//
// import{API_URLS} from '../config/api.url.config';
// import{Produit} from '../shared/produit.model';
// import { CrudService } from '../shared/crud.service';
// @Injectable()
// export class ProduitService implements CrudService{
//
// constructor(private http:HttpClient){
//
// }
// getAll():Observable<any>{
//   //create an observable
//     return this.http.get(API_URLS.PRODUITS_URL);
// }
// add(produit):Observable<any>{
//   //create an observable
//     return this.http.post(API_URLS.PRODUITS_URL,produit);
// }
//
// update(produit):Observable<any>{
//   //create an observable
//     return this.http.put(API_URLS.PRODUITS_URL,produit);
// }
// delete(id):Observable<any>{
//   //create an observable
//     return this.http.delete(API_URLS.PRODUITS_URL + `/${id}`);
// }
// }
