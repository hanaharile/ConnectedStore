import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';

@Injectable()
export class ProduitMockService{

   private PRODUITS :Produit[] = [];
constructor(){

 let p1:Produit =new Produit('Ordinateur','PC DELL',10000,13);
 let p2:Produit =new Produit('Ordinateur','PC HP',5000,10);
 let p3:Produit =new Produit('Phone','Samsung A10',10500,13);
 let p4:Produit =new Produit('Phone','Huwai_11',10000,11);

          this.PRODUITS.push(p1);
            this.PRODUITS.push(p2);
            this.PRODUITS.push(p3);
            this.PRODUITS.push(p4);

}
public getProduits(): Produit[]{
  return this.PRODUITS;
}
}
