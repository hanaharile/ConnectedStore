import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showHideSideBar: boolean = false;

  constructor(private appService: AppService,
               private router: Router){}

   ngOnInit(){
     if(!this.appService.authenticated){
       //if its false the login will be redirecte to login
       //else to home
       this.router.navigate(['/login']);
     }
     else {
       this.router.navigate(['/home']);
     }
 }

}
