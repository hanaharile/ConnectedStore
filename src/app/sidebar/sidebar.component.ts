import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
// import { Store } from '@ngrx/store';
//
// import { PrincipalState } from '../../authentication/shared/principal.state';
// import { Principal } from '../../authentication/shared/model/principal.model';
=======
>>>>>>> crud_produit

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

<<<<<<< HEAD
  // private principal: Principal;
  constructor(
// private store: Store<PrincipalState>
) {
}

  ngOnInit() {
    // this.store.select('principal').subscribe(principal => {
    //   this.principal = principal;
    // });
  }
  //
  // hasRoleUser(){
  //   let hasRole: boolean = false;
  //   this.principal.authorities.forEach(item => {
  //     if (item.authority === 'ROLE_USER') {
  //       hasRole = true;
  //     }
  //   });
  //   return hasRole;
  // }
  //
  // hasRoleAdmin(){
  //   let hasRole: boolean = false;
  //   this.principal.authorities.forEach(item => {
  //     if (item.authority === 'ROLE_ADMIN') {
  //       hasRole = true;
  //     }
  //   });
  //   return hasRole;
  // }




=======
  constructor() { }

  ngOnInit() {
  }
>>>>>>> crud_produit

}
