import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
//
import { PrincipalState } from '../shared/principal.state';
import { Principal } from '../shared/principal.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private principal: Principal;
  constructor(
private store: Store<PrincipalState>
) {
}

  ngOnInit() {
    this.store.select('principal').subscribe(principal => {
      console.log(principal);
      this.principal = principal;
    });
  }

  hasRoleUser(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
      if (item.authority === 'ROLE_USER') {
        hasRole = true;
      }
    });
    return hasRole;
  }

  hasRoleAdmin(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
      if (item.authority === 'ROLE_ADMIN') {
        hasRole = true;
      }
    });
    return hasRole;
  }
}
