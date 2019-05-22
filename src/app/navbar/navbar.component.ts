<<<<<<< HEAD
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

// import { AppService } from '../../authentication/shared/service/app.service';
=======
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
>>>>>>> crud_produit

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
<<<<<<< HEAD

  @Input()
  showSideBar: boolean = false;

  @Output()
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  // constructor(private appService: AppService, private router: Router) { }
=======
@Input()
showSideBar:boolean=false;
@Output()
showSideBarChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
>>>>>>> crud_produit

  ngOnInit() {
  }

<<<<<<< HEAD
  afficherSideBar(){
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }

  // logout(){
  //   this.appService.logout(()=>{
  //     this.router.navigateByUrl('/login');
  //   });
  // }




=======
afficherSideBar(){
this.showSideBar= !this.showSideBar;
this.showSideBarChange.emit(this.showSideBar);
}
>>>>>>> crud_produit
}
