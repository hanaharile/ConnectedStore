import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Produit} from '../shared/produit';
import {ProduitService} from './produit.service';


@Component({
  selector : 'app-produit',
  templateUrl: './produit.component.html',
   styleUrls:['./produit.component.css']
})

export class ProduitComponent implements OnInit{

 produits:Produit[];

 produitForm: FormGroup;
 operation : string = 'add';

selectedProduit : Produit;

constructor(private produitService : ProduitService, private fb: FormBuilder, private route: ActivatedRoute){
    this.createForm();
}
ngOnInit(){
  this.initProduit();
  this.produits = this.route.snapshot.data.produits;
   }
  createForm(){
    this.produitForm = this.fb.group({
        ref: ['', Validators.required],
          id:'',
        quantite: '',
        prixUnitaire: ''
  });
  }
  loadProduit(){
//subscribe begin listening for async result
    this.produits=this.produitService.getProduits().subscribe(
      data => {this.produits=data},
      error => {console.log("Une erreur est Survenue.")},
      ()=>{console.log("chargement de Produit est terminee.")}
    );
  }
addProduit(){
  const p = this.produitForm.value;
  this.produitService.addProduit(p).subscribe(
    res=>{
      this.initProduit();

      this.loadProduit();
    }
  );
}
updateProduit(){
  const p = this.produitForm.value;
  this.produitService.updateProduit(this.selectedProduit).subscribe(
    res=>{
      this.initProduit();
      this.loadProduit();
    }
  );
}

initProduit(){
  this.selectedProduit= new Produit();
  this.createForm();

}
}
