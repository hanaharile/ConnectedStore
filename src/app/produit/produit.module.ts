import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';

import { ProduitComponent } from './produit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ReactiveFormsModule,
  SharedModule],
  declarations: [
    ProduitComponent
  ]
})
export class ProduitModule{

}
