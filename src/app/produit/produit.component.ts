import {Component, OnInit} from '@angular/core';
import {Produit} from '../shared/produit';
import {ProduitMockService} from './produit.mock.service';


@Component({
  selector : 'app-produit',
  templateUrl: './produit.component.html',
   styleUrls:['./produit.component.css']
})

export class ProduitComponent implements OnInit{

 produits:Produit[];
constructor(private produitService : ProduitMockService){

}
ngOnInit(){
    this.produits=this.produitService.getProduits();}

}
