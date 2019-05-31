import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {Produit} from '../shared/produit.model';
import {ProduitService} from './produit.service';
import { DataModel } from '../shared/data.model';


@Component({
  selector : 'app-produit',
  templateUrl: './produit.component.html',
   styleUrls:['./produit.component.css']
})

export class ProduitComponent implements OnInit{


  produits: Produit[];

    produitForm: FormGroup;

    produit: Produit  = new Produit();

    produitsModel: DataModel[];

    constructor(private produitService: ProduitService, private fb: FormBuilder, private route: ActivatedRoute){

    }

    ngOnInit(){
      // this.initProduit();
      this.produits = this.route.snapshot.data.produits;
      this.produitForm = this.fb.group({
        ref: ['', Validators.required],
        quantite: '',
        prixUnitaire: ''
      });

      this.produitsModel = [
        new DataModel('id','ID','number',true,[]),
        new DataModel('ref','Référence','string',false,[]),
        new DataModel('quantite','Quantité','number',false,[]),
        new DataModel('prixUnitaire','Prix Unitaire','number',false,[])
      ]
  }
}

//  produits:Produit[];
//
//  produitForm: FormGroup;
//  operation : string = 'add';
//
// selectedProduit : Produit;
//
// constructor(private produitService : ProduitService, private fb: FormBuilder, private route: ActivatedRoute){
//     this.createForm();
// }
// ngOnInit(){
//   this.initProduit();
//   this.produits = this.route.snapshot.data.produits;
//    }
//   createForm(){
//     this.produitForm = this.fb.group({
//         ref: ['', Validators.required],
//         quantite: '',
//         prixUnitaire: ''
//   });
//   }
//   loadProduits(){
// //subscribe begin listening for async result
//     this.produitService.getAll().subscribe(
//       data => {this.produits = data},
//       error => {console.log("Une erreur est Survenue.")},
//       ()=>{console.log("chargement de Produit est terminee.")}
//     );
//   }
// addProduit(){
//   const p = this.produitForm.value;
//   this.produitService.add(p).subscribe(
//     res=>{
//       this.initProduit();
//       this.loadProduits();
//     }
//   );
// }
// updateProduit(){
//   this.produitService.update(this.selectedProduit).subscribe(
//     res=>{
//       this.initProduit();
//       this.loadProduits();
//     }
//   );
// }
//
// deleteProduit(){
//   this.produitService.delete(this.selectedProduit.id).subscribe(
//     res=>{
//    this.selectedProduit=new Produit();
//       this.loadProduits();
//     }
//   );
// }
//
// initProduit(){
//   this.selectedProduit= new Produit();
//   this.createForm();
//
// }
