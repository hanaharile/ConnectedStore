import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { CrudService } from '../crud.service';
import { DataModel } from '../data.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  @Input()
   title: string;

   @Input()
   data: any;

   @Input()
   service: CrudService;

   @Input()
   initItem: any;

   @Input()
   initForm: FormGroup;
   crudForm: FormGroup;
   operation :string ='add';

   selectedItem :any;

   @Input()
   dataModelList: DataModel[];

   crudType = 'sample';
   constructor( private fb: FormBuilder){
       this.createForm();
   }
   ngOnInit(){
     this.init();
      }

     createForm(){

  this.initForm ? this.crudForm = this.initForm : this.crudForm = this.fb.group({});

     }

     loadData(){
   //subscribe begin listening for async result
       this.service.getAll().subscribe(
         data => {this.data = data},
         error => {console.log("Une erreur est Survenue.")},
         ()=>{console.log("chargement de Produit est terminee.")}
       );
     }

   add(){
     const p = this.crudForm.value;
     this.service.add(p).subscribe(
       res=>{
         this.init();
         this.loadData();
       }
     );
   }
   update(){
     this.service.update(this.selectedItem).subscribe(
       res=>{
         this.init();
         this.loadData();
       }
     );
   }

   delete(){
     this.service.delete(this.selectedItem.id).subscribe(
       res=>{
      this.selectedItem=this.initItem;
         this.loadData();
       }
     );
   }

   init(){
     this.selectedItem= this.initItem;
     this.createForm();

   }

   // dataChanged($event){
   //   this.data = this.data.concat($event);
   // }

}
